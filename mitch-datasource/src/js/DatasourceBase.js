import EventEmitter from 'events';

/**
 * An abstract class for derived datasource
 * classes to use to represent core collections
 * of data.
 *
 * It provides additional features such
 * as pagination, sorting, searching, etc.
 */
class DatasourceBase extends EventEmitter {
  /**
   * The object used for multi-column or
   * specific-column searching. It should be
   * in the format of:
   * ```
   * {
   *   '[fieldNameToSearch1]': '[textToSearch]',
   *   // ...
   *   '[fieldNameToSearchN]': '[textToSearch]'
   * }
   * ```
   *
   * @typedef {Object} MultiColumnSearchArgs
   * @example
   * {
   *    'firstName': 'michael',
   *    'lastName': 'jackson'
   * }
   */

  /**
   * The object used for multi-column or
   * specific-column sorting. It should be
   * in the format of:
   * ```
   * {
   *   '[fieldNameToSort1]': '[desc|descend|descending|asc|ascend|ascending]',
   *   // ...
   *   '[fieldNameToSortN]': '[desc|descend|descending|asc|ascend|ascending]'
   * }
   * ```
   *
   * @typedef {Object} MultiColumnSortArgs
   * @example
   * {
   *    'firstName': 'asc',
   *    'lastName': 'desc'
   * }
   */

  /**
   * Create a datasource.
   * @param {Object} [options]
   * The datasource options.
   * @param {Boolean} [options.loading=false]
   * Represents whether the datasource is
   * loading or not.
   * @param {Number} [options.offset=0]
   * The pagination offset. It skips the
   * specified amount of items when querying.
   * @param {Number} [options.page=1]
   * The page Number for data pagination.
   * @param {Number} [options.size=10]
   * The pagination size, i.e. the Number
   * of records per page.
   * @param {String} [options.searchText=null]
   * The text to search for. Used to filter
   * the data items.
   * @param {MultiColumnSearchArgs} [options.searchArguments=null]
   * The search arguments object, for specific
   * or multi-column searching purposes.
   * @param {MultiColumnSortArgs} [options.sortArguments=null]
   * The sort arguments object, for specific
   * or multi-column sorting purposes.
   */
  constructor(options = {}) {
    super();
    const mergedOptions = {
      ...DatasourceBase.prototype.defaults,
      ...options,
    };

    /**
     * Represents whether the datasource is
     * loading or not.
     *
     * @access public
     * @type {Boolean}
     */
    this.loading = mergedOptions.loading;

    /**
     * The pagination offset. It skips the
     * specified amount of items when querying.
     *
     * @access public
     * @type {Number}
     */
    this.offset = mergedOptions.offset;

    /**
     * The pagination size, i.e. the Number
     * of records per page.
     *
     * @access public
     * @type {Number}
     */
    this.size = mergedOptions.size;

    /**
     * The text to search for. Used to filter
     * the data items.
     *
     * @access public
     * @type {String}
     */
    this.searchText = mergedOptions.searchText;

    /**
     * The search arguments object, for specific
     * or multi-column searching purposes.
     *
     * @access public
     * @type {MultiColumnSearchArgs}
     */
    this.searchArguments = mergedOptions.searchArguments;

    /**
     * The search arguments object, for specific
     * or multi-column sorting purposes.
     *
     * @access public
     * @type {MultiColumnSortArgs}
     */
    this.sortArguments = mergedOptions.sortArguments;

    if (mergedOptions.page) {
      /**
       * The page Number for data pagination.
       *
       * @access public
       * @type {Number}
       */
      this.page = mergedOptions.page;
    }
  }

  /**
   * Overridables
   */

  /**
   * Gets the current set of data the datasource
   * has, based on pagination, sorting, and filtering.
   * @abstract
   * @access public
   * @type {?Array}
   */
  get data() {
    throw new Error(`Getter not supported for ${this.constructor.name}`);
  }

  /**
   * Gets the total amount of data items available
   * for the datasource to page through.
   * @abstract
   * @type {Number}
   */
  get total() {
    throw new Error(`Getter not supported for ${this.constructor.name}`);
  }

  /**
   * Updates the datasource, using the currently
   * configured search text, sort settings, and
   * pagination options.
   * @abstract
   * @access protected
   * @return {Promise} A promise object, resolved when the update is completed.
   */
  _update() {
    throw new Error(`Method not supported for ${this.constructor.name}`);
  }

  /**
   * Getters & Setters
   */

  /**
   * Gets the total amount of data items for the current page.
   * @access public
   * @type {?Array}
   */
  get pageTotal() {
    if (this.offset === this.total) {
      return 0;
    }
    const itemsRemaining = this.total - this.offset;
    if (itemsRemaining <= this.size) {
      return itemsRemaining;
    }
    return this.size;
  }

  /**
   * Gets the current page the datasource is
   * currently set to.
   * @access public
   * @type {Number}
   */
  get page() {
    if (this.totalPages === 0) {
      return 0;
    }
    return (this.offset + this.size) / this.size;
  }

  /**
   * @param  {Number} newPage - The new page to set to.
   * @access public
   * @type {Number}
   */
  set page(newPage) {
    this.offset = newPage * this.size - this.size;
  }

  /**
   * Boolean to indicate whether it's the first page or not.
   * @access public
   * @type {Boolean}
   */
  get isFirstPage() {
    if (this.page <= 1) {
      return true;
    }
    return false;
  }

  /**
   * Boolean to indicate whether it's the last page or not.
   * @access public
   * @type {Boolean}
   */
  get isLastPage() {
    if (this.page >= this.totalPages) {
      return true;
    }
    return false;
  }

  /**
   * The total amount of pages.
   * Returns null if total wasn't provided.
   * A Number representing current page otherwise.
   * @access public
   * @type {?Number}
   */
  get totalPages() {
    if (this.total === null || !this.size) {
      return null;
    }
    if (this.total === 0) {
      return 0;
    }
    return Math.ceil(this.total / this.size);
  }

  /**
   * Methods
   */

  /**
   * Updates the datasource, using the currently
   * configured search text, sort settings, and
   * pagination options.
   * @access public
   * @return {Promise} A promise object, resolved when the update is completed.
   */
  async update() {
    this.loading = true;
    try {
      const updateStartArgs = {
        sender: this,
        prevented: false,
        preventDefault() {
          updateStartArgs.prevented = true;
        },
      };
      this.emit('updatestart', updateStartArgs);
      if (updateStartArgs.prevented) {
        return null;
      }
      const updatedResponse = await this._update();
      this.emit('updateend', {
        sender: this,
      });
      this.loading = false;
      return updatedResponse;
    } catch (ex) {
      this.loading = false;
      throw ex;
    }
  }

  /**
   * Traverse to the specified page, and update the datasource accordingly.
   * @access public
   * @param  {Number} pageNum - The new page to traverse to.
   * @return {Promise} A promise with a boolean data. True if
   *                   successfully traversed to specified page.
   *                   False otherwise.
   */
  async goToPage(pageNum) {
    if (pageNum > 0 && pageNum <= this.totalPages) {
      this.page = pageNum;
      await this.update();
      return true;
    }
    return false;
  }

  /**
   * Traverse to the next page, and update the datasource accordingly.
   * @return {Promise} A promise with a boolean data. True if
   *                   successfully traversed to next page.
   *                   False otherwise.
   */
  async nextPage() {
    return this.goToPage(this.page + 1);
  }

  /**
   * Traverse to the previous page, and update the datasource accordingly.
   * @access public
   * @return {Promise} A promise with a boolean data. True if
   *                   successfully traversed to previous page.
   *                   False otherwise.
   */
  async prevPage() {
    return this.goToPage(this.page - 1);
  }

  /**
   * Given a search text, filters the data accordingly.
   * @access public
   * @param  {String} searchArguments - The search text to filter with, or
   *                                    the search arguments object to filter
   *                                    with specific column filtering.
   * @return {Promise} A promise object, resolved when the search is completed.
   */
  async search(searchArguments) {
    this.searchText = null;
    this.searchArguments = null;
    if (typeof searchArguments === 'string') {
      this.searchText = searchArguments;
    } else {
      this.searchArguments = searchArguments;
    }
    this.offset = 0;
    return this.update();
  }

  /**
   * Sort the data based on a field and direction.
   * @access public
   * @param  {Object} sortArguments - Object with keys as the field names to sort.
   *                                  The values of the object is the sort direction.
   *                                  The sort direction can be 'asc', 'ascend', 'desc',
   *                                  'descending'
   * @return {Promise} A promise object, resolved when the sorting is completed.
   */
  async sort(sortArguments = null) {
    this.sortArguments = sortArguments;
    return this.update();
  }
}

DatasourceBase.prototype.defaults = {
  loading: false,
  offset: 0,
  size: 10,
  searchText: null,
  searchArguments: null,
  sortArguments: null,
};

export default DatasourceBase;
