import { AjaxDatasource } from 'mitch-datasource';
import mockData from '../../mocks/data-array';
import mockAjaxCall from '../../mocks/ajax-call';

const dsOptions = {
  size: 10,
  ajax: async function() {
    return await mockAjaxCall(this, mockData);
  }
};

test("Pagination Next Page", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.update();
  let initialPageData = datasource.data;
  let goneToNextPage = await datasource.nextPage();
  let newPageData = datasource.data;
  expect(goneToNextPage && datasource.page == 2 && initialPageData[0].id != newPageData[0].id).toBeTruthy();
});

test("Pagination Go To Page", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.update();
  let initialPageData = datasource.data;
  let goneToPage = await datasource.goToPage(3);
  let newPageData = datasource.data;
  expect(goneToPage && datasource.page == 3 && initialPageData[0].id != newPageData[0].id).toBeTruthy();
});

test("Pagination Previous Page", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.update();
  let initialPageData = datasource.data;
  let goneToPage = await datasource.goToPage(3);
  let prevPage = await datasource.prevPage();
  let newPageData = datasource.data;
  expect(goneToPage && prevPage && datasource.page == 2 && initialPageData[0].id != newPageData[0].id).toBeTruthy();
});

test("Total Page Count", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.update();
  let totalPages = datasource.totalPages;
  let trueTotalPages = Math.ceil(mockData.length / datasource.size);
  expect(totalPages == trueTotalPages).toBeTruthy();
});

test("Page Count", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.update();
  let lastPage = Math.ceil(mockData.length / datasource.size);
  await datasource.goToPage(lastPage);
  let pageTotal = datasource.pageTotal;
  let truePageTotal = mockData.length % dsOptions.size;
  expect(pageTotal == truePageTotal).toBeTruthy();
});
