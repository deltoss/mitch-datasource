import queryString from 'query-string';

function hasObjectInArray(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'object') {
      return true;
    }
  }
  return false;
}

class QueryBuilder {
  constructor(options = {}) {
    const mergedOptions = {
      ...QueryBuilder.prototype.defaults,
      ...options,
    };
    this.queryObjectMap = mergedOptions.queryObjectMap;
    this.queryStringOptions = mergedOptions.queryStringOptions;
    this.serialiseToQueryString = mergedOptions.serialiseToQueryString;
  }

  getQueryObject(datasource) {
    if (!this.queryObjectMap) {
      throw new Error('queryObjectMap must be specified and cannot be undefined or null.');
    }
    return this.queryObjectMap.call(this, datasource);
  }

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
  // objects and arrays.
  queryObjectMap(datasource) {
    const entries = Object.entries(datasource);
    const filteredEntries = entries.filter((entry) => {
      const key = entry[0];
      if (key.indexOf('_') === 0) { // Ignore 'private' properties
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
