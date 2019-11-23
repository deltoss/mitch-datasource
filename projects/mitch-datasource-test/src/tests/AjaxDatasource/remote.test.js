import { AjaxDatasource } from 'mitch-datasource';

const ajaxObjectDsOptions = {
  ajax: {
    // Note pagination/sorting/filtering doesn't
    // work with this fake endpoint, as even when
    // we send the datasource parameters, the
    // remote endpoint won't actually vary
    // the returned dataset.
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'get',
    mapper: function(response) {
      return {
        data: response.data,
        total: response.data.length,
      }
    }
  }
};

test("AJAX GET", async () => {
  let datasource = new AjaxDatasource(ajaxObjectDsOptions);
  let response = await datasource.update();
  expect(response.config.url).toEqual(`${ajaxObjectDsOptions.ajax.url}?offset=0&page=1&size=10`);
  expect(datasource.data && datasource.data.length > 0).toBeTruthy();
});

test("AJAX GET with Object", async () => {
  let datasource = new AjaxDatasource(ajaxObjectDsOptions);
  let response = await datasource.sort({ "firstName": "desc", "lastName": "asc" });
  expect(response.config.url).toEqual(`${ajaxObjectDsOptions.ajax.url}?offset=0&page=1&size=10&sortArguments=%7B%22firstName%22%3A%22desc%22%2C%22lastName%22%3A%22asc%22%7D`);
});