import queryString from 'query-string';

function hasObjectInArray(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'object') {
      return true;
    }
  }
  return false;
}

/**
 * Using a datasource object, it builds
 * the data object for AJAX post requests,
 * or the query string for AJAX get requests
 *
 * @example <caption>With AJAX Datasource</caption>
 *
 * import { AjaxDatasource, QueryBuilder } from 'mitch-datasource';
 *
 * let datasource = new AjaxDatasource({
 *   // ...
 *   queryBuilder: new QueryBuilder({
 *     // ...
 *   })
 * });
 *
 * @example <caption>With Adding to Defaults</caption>
 *
 * import { AjaxDatasource, QueryBuilder } from 'mitch-datasource';
 *
 * let datasource = new AjaxDatasource({
 *   // ...
 *   queryBuilder: new QueryBuilder({
 *     // ...
 *     serialiseToQueryObject(datasource) {
 *       // Calls the original default serialiser
 *       let queryObject = QueryBuilder.prototype
 *                         .defaults.serialiseToQueryObject(datasource);
 *       // ... Do your additional operations
 *       return queryObject;
 *     },
 *     serialiseToQueryString(objectToSerialise) {
 *       // Calls the original default serialiser
 *       let queryString = QueryBuilder.prototype
 *                         .defaults.serialiseToQueryString(objectToSerialise);
 *       // ... Do your additional operations
 *       return queryString;
 *     },
 *     queryStringOptions: {
 *       // Keep the default options
 *       ...QueryBuilder.prototype.defaults.queryStringOptions,
 *       // ... Put additional options here. It'll override default options
 *       // For available options, check the docs for QueryBuilder constructor
 *     }
 *   })
 * });
 *
 * @example <caption>With Extra Parameter for GET/POST Request</caption>
 *
 * import { AjaxDatasource, QueryBuilder } from 'mitch-datasource';
 *
 * let datasource = new AjaxDatasource({
 *   // ...
 *   queryBuilder: new QueryBuilder({
 *     serialiseToQueryObject(datasource) {
 *       // Calls the original converter
 *       let queryObject = QueryBuilder.prototype.defaults.serialiseToQueryObject(datasource);
 *       queryObject['extraGreetingData'] = 'HelloWorld';
 *       return queryObject;
 *     },
 *   })
 * });
 */
class QueryBuilder {
  /**
   * Callback function that converts a datasource
   * into a query object (which in turn can be
   * converted to query string).
   *
   * @typedef {Function} SerialiseToQueryObjectCallback
   * @param {DatasourceBase} datasource
   * The datasource to convert to a query object.
   * @returns {Object} The query object.
   */

  /**
   * Callback function which serialises the
   * query string object to the query string.
   * By default, it uses the `query-string` package
   * to convert the query string object to query
   * string.
   *
   * @typedef {Function} SerialiseToQueryStringCallback
   * @param {Object} objectToSerialise
   * The object to serialise to query string.
   * By default, it's the query object.
   * @returns {String} The query string.
   */

  /**
   * The query string options object that
   * contains configuration and settings
   * to affect the process of converting
   * the datasource to a query string.
   *
   * For a full list of available options
   * and settings, see {@link https://www.npmjs.com/package/query-string#stringifyobject-options}
   *
   * @typedef {Object} QueryStringOptions
   */

  /**
   * @param {Object} [options] The options object.
   * @param {SerialiseToQueryObjectCallback} [options.serialiseToQueryObject]
   * Function which converts a datasource
   * into a query object (which in turn can
   * be converted to query string).
   * @param {QueryStringOptions} [options.queryStringOptions]
   * See {@link QueryStringOptions}
   * @param {SerialiseToQueryStringCallback} [options.serialiseToQueryString]
   * The function which serialises the
   * query string object to the query string.
   */
  constructor(options = {}) {
    const mergedOptions = {
      ...QueryBuilder.prototype.defaults,
      ...options,
    };
    /**
     * See {@link SerialiseToQueryObjectCallback}
     *
     * @access public
     * @type {SerialiseToQueryObjectCallback}
     */
    this.serialiseToQueryObject = mergedOptions.serialiseToQueryObject;

    /**
     * See {@link QueryStringOptions}
     *
     * @access public
     * @type {QueryStringOptions}
     */
    this.queryStringOptions = mergedOptions.queryStringOptions;

    /**
     * If you need to change the behavior of the
     * query string, then you should first check
     * {@link QueryBuilder#queryStringOptions}
     *
     * For more information, see {@link SerialiseToQueryStringCallback}
     *
     * @access public
     * @type {SerialiseToQueryStringCallback}
     */
    this.serialiseToQueryString = mergedOptions.serialiseToQueryString;
  }

  /**
   * Serialises a datasource into
   * an object and returns that object.
   * That object is passed as data as
   * part of AJAX post requests.
   *
   * @param {DatasourceBase} datasource The datasource.
   * @access public
   * @returns {Object} The query object.
   */
  getQueryObject(datasource) {
    if (!this.serialiseToQueryObject) {
      throw new Error('serialiseToQueryObject must be specified and cannot be undefined or null.');
    }
    return this.serialiseToQueryObject.call(this, datasource);
  }

  /**
   * Serialises a datasource into
   * a query string and returns that string.
   * This string is passed as data as
   * part of AJAX get requests.
   *
   * @param {DatasourceBase} datasource The datasource.
   * @access public
   * @returns {String} The query string.
   */
  getQueryString(datasource) {
    const objectToSerialise = { ...this.getQueryObject(datasource) };
    if (this.serialiseToQueryString) {
      return this.serialiseToQueryString.call(this, objectToSerialise);
    }
    throw new Error('Query string serialiser is specified as null or undefined in the options.');
  }
}

QueryBuilder.prototype.defaults = {
  // Properties to include in the
  // serialisation to GET query string,
  // or when constructing the
  // data object.
  // By default, it only include
  // primitive properties, ignoring
  // objects, arrays and certain properties.
  serialiseToQueryObject(datasource) {
    const entries = Object.entries(datasource);
    const filteredEntries = entries.filter((entry) => {
      const key = entry[0];
      if (key.indexOf('_') === 0 || key === 'loading') { // Ignore 'private' properties and specified properties
        return false;
      }
      // Ignore properties that shouldn't be serialised,
      // i.e. properties that configures the serialisation
      // itself.
      const value = entry[1];
      if (value === null) { // Don't serialise null values
        return false;
      }
      if (key === 'queryBuilder' || key === 'ajax') {
        return false;
      }
      return true;
    });
    const queryObject = {
      // Computed getters doesn't get included in ES6 spread syntax,
      // so we manually include the necessary one below.
      page: datasource.page,
    };
    filteredEntries.forEach((entry) => {
      const key = entry[0];
      const value = entry[1];
      queryObject[key] = value;
    });
    return queryObject;
  },
  /* eslint-disable no-param-reassign */
  serialiseToQueryString(objectToSerialise) {
    Object.keys(objectToSerialise).forEach((prop) => {
      if (Array.isArray(objectToSerialise[prop]) && hasObjectInArray(objectToSerialise[prop])) {
        for (let i = 0; i < objectToSerialise[prop].length; i += 1) {
          objectToSerialise[prop][i] = JSON.stringify(objectToSerialise[prop][i]);
        }
      } else if (typeof objectToSerialise[prop] === 'object') {
        objectToSerialise[prop] = JSON.stringify(objectToSerialise[prop]);
      }
    });
    return queryString.stringify(objectToSerialise, this.queryStringOptions);
  },
  /* eslint-enable no-param-reassign */
  queryStringOptions: {
    // By default, uses NPM query
    // string package to serialise
    // to query string. For full list
    // of options, see:
    //   https://www.npmjs.com/package/query-string#stringifyobject-options
    // If you specified a query string serialiser,
    // this options can optionally be used.
    arrayFormat: 'bracket',
  },
};

export default QueryBuilder;
