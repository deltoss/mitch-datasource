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
  await datasource.sort({ 'lastName': 'asc' });
  let data = datasource.data;
  let firstItem = data[0];
  let lastItem = data[data.length - 1];
  expect(firstItem.lastName < lastItem.lastName).toBeTruthy();
});

test("Sort Using Descending Order", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.sort({ 'firstName': 'desc' });
  let data = datasource.data;
  let firstItem = data[0];
  let lastItem = data[data.length - 1];
  expect(firstItem.firstName > lastItem.firstName).toBeTruthy();
});

test("Multi-Column Sort", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  await datasource.sort({
    job: 'asc',
    firstName: 'asc',
    lastName: 'asc',
  });
  let dataIds = datasource.data.map((value) => {
    return value.id;
  });
  expect(dataIds).toStrictEqual([21, 18, 14, 10, 17, 22, 12, 11, 3, 13]);
});