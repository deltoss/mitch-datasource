import DatasourceBase from './DatasourceBase';

/**
 * Datasource to manage an array of data.
 *
 * @example <caption>Basic Usage</caption>
 * async function exampleAsyncFunction() {
 *   let datasource = new ArrayDatasource({
 *     data: [
 *       {
 *         id: 1,
 *         firstName: 'John',
 *         lastName: 'Smith'
 *       },
 *       {
 *         id: 2,
 *         firstName: 'Mary',
 *         lastName: 'Jane'
 *       },
 *       // ... More
 *     ]
 *   });
 *   await datasource.update();
 *   console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
 * }
 * exampleAsyncFunction();
 */
class ArrayDatasource extends DatasourceBase {
  /**
   * ToDo: Callback function
   *
   * @typedef {Function} SortCallback
   * @param {DatasourceBase} datasource
   * The datasource to convert to a query object.
   * @returns {Object} The query object.
   */

  /**
   * ToDo: Callback function
   *
   * @typedef {Function} SortCallback
   * @param {DatasourceBase} datasource
   * The datasource to convert to a query object.
   * @returns {Object} The query object.
   */

  /**
   * The constructor, taking in an options object.
   * For more passable options, see
   * {@link DatasourceBase#constructor}
   * @override
   * @param {Array} options.data
   * The data array of items.
   * @param {Function} [options.search]
   * The search function callback, which
   * gets called when searching is requested.
   * @param {Function} [options.sort]
   * The sort function callback, which
   * gets called when sorting is requested.
   */
  constructor(options = {}) {
    const mergedOptions = {
      ...ArrayDatasource.prototype.defaults,
      ...options,
    };
    super(mergedOptions);
    /**
     * The raw, unfiltered, unsorted,
     * unpaginated set of data.
     *
     * @access private
     * @type {?Array}
     */
    this._rawData = mergedOptions.data;

    /**
     * The filtered, sorted set of data.
     * This is not paginated.
     * Extracted from the raw data
     * ({@link ArrayDatasource#_rawData})
     *
     * @access private
     * @type {?Array}
     */
    this._processedData = null;

    /**
     * The filtered, sorted, paginated set
     * of data. Extracted from the processed data
     * ({@link ArrayDatasource#_processedData})
     *
     * @access private
     * @type {?Array}
     */
    this._data = null;

    /**
     * The search callback, called
     * when search operations was
     * requested.
     *
     * @access private
     * @type {Function}
     */
    this._search = mergedOptions.search;

    /**
     * The sort callback, called
     * when sort operations was
     * requested.
     *
     * @access private
     * @type {Function}
     */
    this._sort = mergedOptions.sort;
  }

  /**
   * Extracts the processed set of data
   * (i.e sorted, filtered) from the
   * raw data provided.
   * @access private
   * @return {Array} The array of processed data items.
   */
  _getProcessedData() {
    if (!this._rawData) {
      return [];
    }
    let processedData = [...this._rawData];
    if (this.searchArguments) {
      processedData = this._search.call(this, processedData, this.searchArguments);
    } else if (this.searchText) {
      processedData = this._search.call(this, processedData, this.searchText);
    }
    if (this._sort && this.sortArguments) {
      processedData = this._sort.call(this, processedData, this.sortArguments);
    }
    return processedData;
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
    if (this._processedData) {
      return this._processedData.length;
    }
    if (this._rawData) {
      return this._rawData.length;
    }
    return 0;
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
    if (!this._rawData) {
      return null;
    }
    this._processedData = this._getProcessedData();
    this._data = this._processedData.slice(this.offset, this.offset + this.size);
    return this._data;
  }
}

ArrayDatasource.prototype.defaults = {
  data: null,
  /* eslint-disable no-unused-vars */
  search(data, searchArguments) {
    return data;
  },
  sort(data, sortArguments) {
    return data;
  },
  /* eslint-enable no-unused-vars */
};

export default ArrayDatasource;
