import { AjaxDatasource, QueryBuilder } from 'mitch-datasource';

const getDsOptions = {
  ajax: {
    method: 'get',
    url: 'https://non-existent-hello-world.com/api/get-items'
  },
  queryBuilder: new QueryBuilder()
};

const postDsOptions = {
  ajax: {
    method: 'post',
    url: 'https://non-existent-hello-world.com/api/get-items'
  },
  queryBuilder: new QueryBuilder()
};

test("AJAX with GET", async () => {
  let datasource = new AjaxDatasource(getDsOptions);
  let isAxiosError = false;
  let generatedUrl = null;
  try {
    datasource.sortField = "firstName";
    datasource.sortDirection = "asc";
    datasource.searchText = "Michael Jackson";
    await datasource.update();
  } catch(ex) { // Axios exception is expected to be thrown, as there's no real endpoint used
    isAxiosError = ex.isAxiosError;
    generatedUrl = ex.config.url;
  }
  let expectedUrl = 'https://non-existent-hello-world.com/api/get-items?offset=0&page=1&searchText=Michael%20Jackson&size=10&sortDirection=asc&sortField=firstName';
  expect(isAxiosError).toBeTruthy();
  expect(generatedUrl).toEqual(expectedUrl);
});

test("AJAX with POST", async () => {
  let datasource = new AjaxDatasource(postDsOptions);
  let isAxiosError = false;
  let generatedData = null;
  try {
    await datasource.search("Michael Jackson");
  } catch(ex) { // Axios exception is expected to be thrown, as there's no real endpoint used
    isAxiosError = ex.isAxiosError;
    generatedData = JSON.parse(ex.config.data);
  }
  expect(isAxiosError).toBeTruthy();
  expect(generatedData).toEqual({
    offset: datasource.offset,
    page: datasource.page,
    searchText: datasource.searchText,
    size: datasource.size
  });
});