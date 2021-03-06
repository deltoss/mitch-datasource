import { ArrayDatasource } from 'mitch-datasource';
import { stubDataArray, mockSortLogic } from 'mitch-datasource-test-utilities';

const dsOptions = {
  data: stubDataArray,
  sort: (data, sortArguments = { 'firstName': 'asc' }) => {
    return mockSortLogic(data, sortArguments);
  }
};

test("Sort Using Ascending Order", async () => {
  let datasource = new ArrayDatasource(dsOptions);
  await datasource.sort({ 'lastName': 'asc' });
  let data = datasource.data;
  let firstItem = data[0];
  let lastItem = data[data.length - 1];
  expect(firstItem.lastName < lastItem.lastName).toBeTruthy();
});

test("Sort Using Descending Order", async () => {
  let datasource = new ArrayDatasource(dsOptions);
  await datasource.sort({ 'firstName': 'desc' });
  let data = datasource.data;
  let firstItem = data[0];
  let lastItem = data[data.length - 1];
  expect(firstItem.firstName > lastItem.firstName).toBeTruthy();
});

test("Multi-Column Sort", async () => {
  let datasource = new ArrayDatasource(dsOptions);
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