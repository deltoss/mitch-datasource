import { ArrayDatasource } from 'mitch-datasource';
import { stubDataArray } from 'mitch-datasource-test-utilities';

const dsOptions = {
  size: 10,
  data: stubDataArray
};

test("UpdateStart Cancel", async () => {
  let datasource = new ArrayDatasource(dsOptions);
  datasource.on('updatestart', function(e) {
    e.preventDefault(); // This should stop it from actually updating
  });
  const updateResponse = await datasource.update();
  expect(!updateResponse && !datasource.data).toBeTruthy();
});

test("UpdateEnd", async () => {
  let datasource = new ArrayDatasource(dsOptions);
  let eventObject = null;
  datasource.on('updateend', function(e) {
    eventObject = e;
  });
  const updateResponse = await datasource.update();
  expect(eventObject && eventObject.sender === datasource
    && updateResponse).toBeTruthy();
});