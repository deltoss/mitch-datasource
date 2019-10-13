import axios from 'axios';
import DatasourceBase from './DatasourceBase';
import QueryBuilder from './QueryBuilder';

class AjaxDatasource extends DatasourceBase {
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

    this._total = null;
    this._data = null;
    if (mergedOptions.queryBuilder instanceof QueryBuilder) {
      this.queryBuilder = mergedOptions.queryBuilder;
    } else if (mergedOptions.queryBuilder) {
      this.queryBuilder = new QueryBuilder(mergedOptions.queryBuilder);
    }
    this.ajax = mergedOptions.ajax;
  }

  /**
     * Performs an AJAX call.
     * @param {string} url Url to remote endpoint to ajax for.
     * @param {string} method The AJAX method.
     */
  _ajaxCall(url, method) {
    const actualMethod = method ? method.toLowerCase() : method;
    let data = {};
    let actualUrl = url;

    if (actualMethod === 'get') {
      actualUrl = `${actualUrl}?${this.queryBuilder.getQueryString(this)}`;
    } else {
      data = this.queryBuilder.getQueryObject(this);
    }
    const axiosOptions = this.ajax.options || {};
    return axios({
      ...axiosOptions,
      method: actualMethod,
      url: actualUrl,
      data,
    });
  }

  /**
     * Builds an AJAX handler function.
     * @param {Function|string|object} ajax Can be either a:
     *                                      * Callback function, taking in a
     *                                        query builder object, and returning
     *                                        a promise object.
     *                                      * A string which is the URL to the
     *                                        remote endpoint
     *                                      * An ajax object of the following format:
     *                                            {
     *                                                url: String,
     *                                                method: String, // 'get' or 'post'
     *                                                mapper: Function,
     *                                                options: Object
     *                                            }
     */
  _buildAjaxHandler() {
    const ajaxHandler = {
      function: () => this.ajax.call(this, this.queryBuilder),
      string: () => {
        const url = this.ajax;
        return this._ajaxCall(url, 'get');
      },
      object: () => {
        const { url } = this.ajax;
        const method = this.ajax.method || 'get';
        return this._ajaxCall(url, method);
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
     */
  get total() {
    return this._total;
  }

  /**
     * @inheritdoc
     */
  get data() {
    return this._data;
  }

  /**
     * @inheritdoc
     */
  update() {
    const ajaxHandler = this._buildAjaxHandler();
    return ajaxHandler.call(this).then((...responses) => {
      // If not provided an object, use the default mapper
      const mapper = this.ajax.mapper || AjaxDatasource.prototype.defaults.ajax.mapper;
      const mappedObject = mapper.apply(this, responses);
      this._data = mappedObject.data;
      this._total = mappedObject.total;
    });
  }
}

AjaxDatasource.prototype.defaults = {
  queryBuilder: {},
  // ajax can be an object, function, or even a simple string
  ajax: {
    // Additional options for axios
    options: {},
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
