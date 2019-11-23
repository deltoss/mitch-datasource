import mockFilterLogic from './mock-filter-logic';
import mockSortLogic from './mock-sort-logic';

export default function (datasource, allData) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      const processedData = {
        data: allData,
        total: allData.length,
      };
      // Filter
      const searchArgs = datasource.searchArguments;
      processedData.data = mockFilterLogic(
        processedData.data,
        searchArgs,
      );
      // Sort
      processedData.data = mockSortLogic(
        processedData.data,
        datasource.sortArguments,
      );
      // Pagination
      processedData.data = processedData.data.slice(
        (datasource.page - 1) * datasource.size,
        datasource.page * datasource.size,
      );
      resolve(processedData);
    }, 1000); // Timeout simulates the AJAX delay
  }));
}
