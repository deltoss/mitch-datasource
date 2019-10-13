import mockFilterLogic from './filter-logic';
import mockSortLogic from './sort-logic';
export default function (datasource, allData) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var processedData = {
          data: allData,
          total: allData.length
      };
      // Filter
      processedData.data = mockFilterLogic(processedData.data, datasource.searchText);
      // Sort
      processedData.data = mockSortLogic(processedData.data, datasource.sortField, datasource.sortDirection);
      // Pagination
      processedData.data = processedData.data.slice((datasource.page - 1) * datasource.size, datasource.page * datasource.size);
      resolve(processedData);
    }, 1000); // Timeout simulates the AJAX delay
  });
}