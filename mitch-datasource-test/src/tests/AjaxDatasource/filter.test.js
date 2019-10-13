import { AjaxDatasource } from 'mitch-datasource';
import mockData from '../../mocks/data-array';
import mockAjaxCall from '../../mocks/ajax-call';

const dsOptions = {
  size: 10,
  ajax: async function() {
    return await mockAjaxCall(this, mockData);
  }
};

test("Filter Using Filter Options", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.search("John Smith");
  let data = datasource.data;
  let item = data[0];
  expect(data.length == 1 && item.id == 1).toBeTruthy();
});