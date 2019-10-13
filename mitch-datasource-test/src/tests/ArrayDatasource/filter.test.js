import { ArrayDatasource } from 'mitch-datasource';
import mockData from '../../mocks/data-array';
import mockFilterLogic from '../../mocks/filter-logic';

const dsOptions = {
  size: 10,
  data: mockData,
  search: mockFilterLogic
};

test("Filter Using Filter Options", async () => {
  let datasource = new ArrayDatasource(dsOptions);
  await datasource.search("John Smith");
  let data = datasource.data;
  let item = data[0];
  expect(data.length == 1 && item.id == 1).toBeTruthy();
});