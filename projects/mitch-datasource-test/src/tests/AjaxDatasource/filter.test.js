import { AjaxDatasource } from 'mitch-datasource';
import { stubDataArray, mockAjaxCall } from 'mitch-datasource-test-utilities';

const dsOptions = {
  ajax: async function() {
    return await mockAjaxCall(this, stubDataArray);
  }
};

test("Filter Using Filter Options", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.search("John Smith");
  let data = datasource.data;
  let item = data[0];
  expect(data.length === 1 && item.id === 1).toBeTruthy();
});

test("Multi Column Filter", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.search({
    job: 'Tester',
    gender: 'Female',
    firstName: 'Pi',
  });
  let data = datasource.data;
  let item = data[0];
  expect(data.length === 1 && item.id === 20).toBeTruthy();
});