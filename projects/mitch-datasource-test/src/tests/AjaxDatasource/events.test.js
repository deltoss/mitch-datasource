import { AjaxDatasource } from 'mitch-datasource';
import { stubDataArray, mockAjaxCall } from 'mitch-datasource-test-utilities';

const dsOptions = {
  ajax: async function() {
    return await mockAjaxCall(this, stubDataArray);
  }
};

test("RequestStart Cancel", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  datasource.on('requeststart', function(e) {
    e.preventDefault(); // This should stop it from actually sending AJAX request and updating the data
  });
  const updateResponse = await datasource.update();
  expect(!updateResponse && !datasource.data).toBeTruthy();
});

test("RequestEnd", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  let eventObject = null;
  datasource.on('requestend', function(e) {
    eventObject = e;
  });
  const updateResponse = await datasource.update();
  expect(eventObject && eventObject.sender === datasource
         && eventObject.response && updateResponse).toBeTruthy();
});

test("UpdateStart Cancel", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  datasource.on('updatestart', function(e) {
    e.preventDefault(); // This should stop it from actually updating
  });
  const updateResponse = await datasource.update();
  expect(!updateResponse && !datasource.data).toBeTruthy();
});

test("UpdateEnd", async () => {
  let datasource = new AjaxDatasource(dsOptions);
  let eventObject = null;
  datasource.on('updateend', function(e) {
    eventObject = e;
  });
  const updateResponse = await datasource.update();
  expect(eventObject && eventObject.sender === datasource
    && updateResponse).toBeTruthy();
});