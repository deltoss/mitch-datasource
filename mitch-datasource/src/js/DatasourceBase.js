/**
 * DatasourceBase represents an abstract
 * class for derived datasource classes
 * to use to represent core collections
 * of data.
 *
 * It provides additional features such
 * as pagination, sorting, etc.
 */
class DatasourceBase {
  /**
     * Create a datasource.
     * @param {object} options - The datasource options.
     */
  constructor(options = {}) {
    const mergedOptions = {
      ...DatasourceBase.prototype.defaults,
      ...options,
    };
    this.offset = mergedOptions.offset;
    this.size = mergedOptions.size;
    this.searchText = mergedOptions.searchText;
    this.sortField = null;
    this.sortDirection = null;

    if (mergedOptions.page) {
      this.page = mergedOptions.page;
    }
  }

  /**
     * Overridables
     */

  /**
     * Gets the current set of data the datasource
     * has, based on pagination, sorting, and filtering.
     * @return {null|Array} The array of data items.
     */
  get data() {
    throw new Error(`Getter not supported for ${this.constructor.name}`);
  }

  /**
     * Gets the total amount of data items available
     * for the datasource to page through.
     * @return {null|Array} The array of data items.
     */
  get total() {
    throw new Error(`Getter not supported for ${this.constructor.name}`);
  }

  /**
     * Gets the total amount of data items for the current page.
     * @return {null|Array} The array of data items.
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
    * Updates the datasource, using the currently
    * configured search text, sort settings, and
    * pagination options.
    * @return {Promise} A promise object, resolved when the update is completed.
    */
  update() {
    throw new Error(`Method not supported for ${this.constructor.name}`);
  }

  /**
     * Traverse to the specified page, and update the datasource accordingly.
     * @param  {Number} pageNum - The new page to traverse to.
     * @return {Promise} A promise with a boolean data. True if
     *                   successfully traversed to specified page.
     *                   False otherwise.
     */
  goToPage(pageNum) {
    return new Promise((resolve, reject) => {
      try {
        if (pageNum >= 0 && pageNum <= this.totalPages) {
          this.page = pageNum;
          this.update().then(() => {
            resolve(true);
          });
        } else {
          resolve(false);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
     * Getters & Setters
     */

  /**
     * Gets the current page the datasource is
     * currently set to.
     * @return {Number} The current page number.
     */
  get page() {
    return (this.offset + this.size) / this.size;
  }

  /**
     * @param  {Number} newPage - The new page to set to.
     */
  set page(newPage) {
    this.offset = newPage * this.size - this.size;
  }

  /**
     * Boolean to indicate whether it's the first page or not.
     * @return {boolean} Whether its the first page or not.
     */
  get isFirstPage() {
    if (this.page <= 1) {
      return true;
    }
    return false;
  }

  /**
     * Boolean to indicate whether it's the last page or not.
     * @return {boolean} Whether its the last page or not.
     */
  get isLastPage() {
    if (this.page >= this.totalPages) {
      return true;
    }
    return false;
  }

  /**
     * The total amount of pages
     * @return {null|Number} Null if total wasn't provided.
     *                       A number representing current page otherwise.
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
     * Traverse to the next page, and update the datasource accordingly.
     * @return {Promise} A promise with a boolean data. True if
     *                   successfully traversed to next page.
     *                   False otherwise.
     */
  nextPage() {
    return this.goToPage(this.page + 1);
  }

  /**
     * Traverse to the previous page, and update the datasource accordingly.
     * @return {Promise} A promise with a boolean data. True if
     *                   successfully traversed to previous page.
     *                   False otherwise.
     */
  prevPage() {
    return this.goToPage(this.page - 1);
  }

  /**
     * Given a search text, filters the data accordingly.
     * @param  {string} search - The search text to filter with.
     * @return {Promise} A promise object, resolved when the search is completed.
     */
  search(newSearchText) {
    this.searchText = newSearchText;
    return this.update();
  }

  /**
     * Sort the data based on a field and direction.
     * @param  {string} fieldName - The name of field to sort with.
     * @param  {string} direction - The sort direction. Can be 'asc', 'ascend', 'desc', 'descending'
     * @return {Promise} A promise object, resolved when the sorting is completed.
     */
  sort(fieldName, direction) {
    if (!fieldName || !direction) {
      throw new Error('Sort field and sort direction must be provided');
    }
    this.sortField = fieldName;
    this.sortDirection = direction;
    return this.update();
  }
}

DatasourceBase.prototype.defaults = {
  offset: 0,
  size: 10,
  searchText: null,
};

export default DatasourceBase;
