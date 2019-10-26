import DatasourceBase from './DatasourceBase';

class ArrayDatasource extends DatasourceBase {
  constructor(options = {}) {
    const mergedOptions = {
      ...ArrayDatasource.prototype.defaults,
      ...options,
    };
    super(mergedOptions);
    this._rawData = mergedOptions.data;
    this._search = mergedOptions.search;
    this._sort = mergedOptions.sort;
    this._data = null;
    this._processedData = null;
  }

  _getProcessedData() {
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
     */
  get data() {
    return this._data;
  }

  /**
     * @inheritdoc
     */
  update() {
    return new Promise((resolve, reject) => {
      if (!this._rawData) {
        resolve();
        return;
      }
      try {
        this._processedData = this._getProcessedData();
        this._data = this._processedData.slice(this.offset, this.offset + this.size);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}

ArrayDatasource.prototype.defaults = {
  data: null,
  search(data) {
    return data;
  },
  /* eslint-disable no-unused-vars */
  sort(data, sortArguments) {
    return data;
  },
  /* eslint-enable no-unused-vars */
};

export default ArrayDatasource;
