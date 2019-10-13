import { ArrayDatasource } from 'mitch-datasource';
import mockData from '../../mocks/data-array';
import mockSortLogic from '../../mocks/sort-logic';

const dsOptions = {
  size: 10,
  data: mockData,
  sortDirection: 'asc',
  sort: (data, fieldName, direction) => {
    fieldName = fieldName || "firstName"; // Defaults to sorting by first name
    direction = direction || "asc"; // Defaults to sorting by ascending order
    return mockSortLogic(data, fieldName, direction);
  }
};

test("Sort Using Ascending Order", async () => {
  let datasource = new ArrayDatasource(dsOptions);
  await datasource.sort('lastName', 'asc');
  let data = datasource.data;
  let firstItem = data[0];
  let lastItem = data[data.length - 1];
  expect(firstItem.lastName < lastItem.lastName).toBeTruthy();
});

test("Sort Using Descending Order", async () => {
  let datasource = new ArrayDatasource(dsOptions);
  await datasource.sort('firstName', 'desc');
  let data = datasource.data;
  let firstItem = data[0];
  let lastItem = data[data.length - 1];
  expect(firstItem.firstName > lastItem.firstName).toBeTruthy();
});