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