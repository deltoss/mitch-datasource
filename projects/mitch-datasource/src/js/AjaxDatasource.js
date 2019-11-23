import axios from 'axios';
import DatasourceBase from './DatasourceBase';
import QueryBuilder from './QueryBuilder';

/**
 * Datasource to retrieve and manage
 * data from a remote endpoint.
 *
 * @example <caption>Basic Usage</caption>
 *
 * import { AjaxDatasource } from 'mitch-datasource';
 *
 * async function exampleAsyncFunction() {
 *   let datasource = new AjaxDatasource({
 *     ajax: 'https://path/to/remote/endpoint'
 *   });
 *   await datasource.update();
 *   console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
 * }
 * exampleAsyncFunction();
 *
 * @example <caption>Basic Usage with Options Object</caption>
 *
 * import { AjaxDatasource } from 'mitch-datasource';
 *
 * async function exampleAsyncFunction() {
 *   let datasource = new AjaxDatasource({
 *     ajax: {
 *       // Note pagination/sorting/filtering doesn't
 *       // work with this fake endpoint, as even when
 *       // we send the datasource parameters, the
 *       // remote endpoint won't actually vary
 *       // the returned dataset.
 *       url: 'https://jsonplaceholder.typicode.com/posts',
 *       method: 'get',
 *       // ... Other Axios options
 *       // `mapper` is a custom option unique to the datasource package,
 *       // it's not actually part of Axios
 *       mapper: function(response) {
 *         return {
 *           data: response.data,
 *           total: response.data.length,
 *         }
 *       }
 *     }
 *   });
 *   await datasource.update();
 *   console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
 * }
 * exampleAsyncFunction();
 *
 * @example <caption>Basic Usage with Function</caption>
 *
 * import { AjaxDatasource } from 'mitch-datasource';
 *
 * async function exampleAsyncFunction() {
 *   let datasource = new AjaxDatasource({
 *     ajax: async function(queryBuilder) {
 *       return await mockAjaxCall(queryBuilder);
 *     }
 *   });
 *   await datasource.update();
 *   console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
 * }
 * exampleAsyncFunction();
 */
class AjaxDatasource extends DatasourceBase {
  /**
   * The constructor, taking in an options object.
   * For more passable options, see
   * {@link DatasourceBase#constructor}
   * @override
   * @param {String|Function|Object} options.ajax
   * Defines the behavior of the AJAX call.
   * If a string, remote endpoint to contact.
   * If a function, it'll call the function
   * when data is requested. If an object,
   * will use the object to configure
   * the AJAX call.
   */
  constructor(options = {}) {
    let { ajax } = options;
    if (ajax && typeof ajax === 'object') {
      ajax = {
        ...AjaxDatasource.prototype.defaults.ajax,
        ...ajax,
      };
    }

    const mergedOptions = {
      ...AjaxDatasource.prototype.defaults,
      ...options,
      ajax,
    };

    super(mergedOptions);

    /**
     * The total amount of data items to page through.
     *
     * @access private
     * @type {Number}
     */
    this._total = null;

    /**
     * The array of data items.
     *
     * @access private
     * @type {?Array}
     */
    this._data = null;

    if (mergedOptions.queryBuilder instanceof QueryBuilder) {
      /**
       * The query builder which constructs
       * either the query object to pass to
       * post/delete/put requests, or the
       * query string to pass to get
       * requests.
       *
       * @access public
       * @type {QueryBuilder}
       */
      this.queryBuilder = mergedOptions.queryBuilder;
    } else if (mergedOptions.queryBuilder) {
      this.queryBuilder = new QueryBuilder(mergedOptions.queryBuilder);
    }

    /**
     * Property defining the behavior
     * of the AJAX call.
     * If a string, remote endpoint
     * to contact. If a function,
     * it'll call the function when
     * data is requested. If an object,
     * will use the object to configure
     * the AJAX call.
     *
     * @access public
     * @type {String|Function|Object}
     */
    this.ajax = mergedOptions.ajax;
  }

  /**
   * Performs an AJAX call.
   *
   * @access private
   * @param {Object} axiosOptions Ajax options object for axios
   * @param {String} axiosOptions.url Url to remote endpoint to ajax for.
   * @param {String} axiosOptions.method The AJAX method, i.e. 'get', 'post', etc.
   * @return {Promise} Returns the axios promise object, containing
   *                   the response from remote endpoint.
   */
  _ajaxCall({ url, method }) {
    const actualAxiosOptions = { url, method };
    actualAxiosOptions.method = actualAxiosOptions.method
      ? actualAxiosOptions.method.toLowerCase()
      : actualAxiosOptions.method;
    if (actualAxiosOptions.method === 'get') {
      actualAxiosOptions.url = `${actualAxiosOptions.url}?${this.queryBuilder.getQueryString(this)}`;
    } else {
      actualAxiosOptions.data = this.queryBuilder.getQueryObject(this);
    }
    return axios(actualAxiosOptions);
  }

  /**
   * Builds an AJAX handler function.
   * @access private
   * @return {Function} A callback function which performs
   *                    the actual ajax operation.
   */
  _buildAjaxHandler() {
    const ajaxHandler = {
      function: () => this.ajax.call(this, this.queryBuilder),
      string: () => {
        const url = this.ajax;
        return this._ajaxCall({
          url,
          method: 'get',
        });
      },
      object: () => {
        this.ajax.method = this.ajax.method || 'get';
        return this._ajaxCall(this.ajax);
      },
    };
    const ajaxObjectType = typeof this.ajax;
    const actualAjaxHandler = ajaxHandler[ajaxObjectType];
    if (!actualAjaxHandler) {
      throw new Error(`Does not support provided ajax object of type ${ajaxObjectType}`);
    }
    return actualAjaxHandler;
  }

  /**
   * Overrides for DatasourceBase
   */

  /**
   * @inheritdoc
   * @override
   * @type {Number}
   */
  get total() {
    return this._total;
  }

  /**
   * @inheritdoc
   * @override
   * @type {?Array}
   */
  get data() {
    return this._data;
  }

  /**
   * @inheritdoc
   * @override
   */
  async _update() {
    const ajaxHandler = this._buildAjaxHandler();
    const requestStartArgs = {
      sender: this,
      prevented: false,
      preventDefault() {
        requestStartArgs.prevented = true;
      },
      ajaxHandler,
    };
    this.emit('requeststart', requestStartArgs);
    if (requestStartArgs.prevented) {
      return null;
    }
    const response = await requestStartArgs.ajaxHandler.call(this);
    this.emit('requestend', {
      sender: this,
      response,
    });
    // If not provided an object, use the default mapper
    const mapper = this.ajax.mapper || AjaxDatasource.prototype.defaults.ajax.mapper;
    const mappedObject = mapper.call(this, response);
    this._data = mappedObject.data;
    this._total = mappedObject.total;
    return response;
  }
}

AjaxDatasource.prototype.defaults = {
  queryBuilder: {},
  // ajax can be an object, function, or even a simple string
  ajax: { // Axios options object
    // Maps the response to return the data in an expected format
    mapper(response) {
      return {
        data: response.data,
        total: response.total,
      };
    },
  },
};

export default AjaxDatasource;
