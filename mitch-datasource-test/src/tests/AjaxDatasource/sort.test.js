import { AjaxDatasource } from 'mitch-datasource';
import { stubDataArray, mockAjaxCall } from 'mitch-datasource-test-utilities';

const dsOptions = {
  size: 10,
  ajax: async function() {
    return await mockAjaxCall(this, stubDataArray);
  }
};

test("Sort Using Ascending Order", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.sort('lastName', 'asc');
  let data = datasource.data;
  let firstItem = data[0];
  let lastItem = data[data.length - 1];
  expect(firstItem.lastName < lastItem.lastName).toBeTruthy();
});

test("Sort Using Descending Order", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.sort('firstName', 'desc');
  let data = datasource.data;
  let firstItem = data[0];
  let lastItem = data[data.length - 1];
  expect(firstItem.firstName > lastItem.firstName).toBeTruthy();
});