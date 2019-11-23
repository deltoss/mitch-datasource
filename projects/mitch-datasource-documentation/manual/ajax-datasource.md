# Ajax Datasource

AJAX Datasource is configured to contact a remote endpoint.
Given an endpoint, by default, it'll pass the below parameters either as query string, or as part of the request data:

Parameter Name | Type | Optional | Description
--- | --- | --- | ---
`offset` | `Number` | No | The pagination offset. It skips the specified amount of items when querying.
`page` | `Number` | No | The page number for data pagination.
`size` | `Number` | No | The pagination size, i.e. the number of records per page.
`searchText` | `String` | Yes | The text to search for. Used to filter the data items.
`sortArguments` | `JSON` | Yes | The sort arguments object, for specific or multi-column sorting purposes. Will be sent to the server as a JSON object.
`searchArguments` | `JSON` | Yes | The search arguments object, for specific or multi-column searching purposes. Will be sent to the server as a JSON object.

__Optional__ with values of yes means it won't be included in the request if there's no value set for it.

## Minimal Configuration:

```javascript
import { AjaxDatasource } from 'mitch-datasource';

let datasource = new AjaxDatasource({
  ajax: 'https://path/to/remote/endpoint'
});
await datasource.update();
console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

## With Mapper

If your remote endpoint doesn't return data in an expected format for the datasource, then you can use the `mapper` option of the AJAX datasource:

```javascript
import { AjaxDatasource } from 'mitch-datasource';

let datasource = new AjaxDatasource({
  ajax: {
    // Note pagination/sorting/filtering doesn't
    // work with this fake endpoint, as even when
    // we send the datasource parameters, the
    // remote endpoint won't actually vary
    // the returned dataset.
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'get',
    // ... Other Axios options
    // `mapper` is a custom option unique to the datasource package,
    // it's not actually part of Axios
    mapper: function(response) {
      return {
        data: response.data,
        total: response.data.length,
      }
    }
  }
});
await datasource.update();
console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

## Sorting

AJAX datasource perform sortings operations through sending sort parameters to the remote endpoint so it can perform the actual sorting operations.

For example, when you use below line of code:

```javascript
  let datasource = new AjaxDatasource({ ajax: '<RemoteEndpoint>' });
  await datasource.sort({ 'lastName': 'asc' });
  console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

The datasource will make a AJAX request to the remote endpoint with the follwoing URL as follows, if the datasource is configured for GET requests:

```
<RemoteEndpoint>?<PaginationParameters>&sortArguments=%7B%lastName%22%3A%22asc%22%7D
```

Essentially, the sort arguments gets converted to JSON so it can be sent to the remote endpoint. It's up to the remote endpoint to convert it to an object, or do whatever with it to perform the actual sort operations, returning the sorted data.

## Multi-Column Sorting

To perform multiple column sorting, simply provide a complex object for sorting. The object can have any parameters as long as your remote endpoint handles it accordingly. For example:

```javascript
  let datasource = new AjaxDatasource({ ajax: '<RemoteEndpoint>' });
  await datasource.sort({ 'firstName': 'desc', 'lastName': 'asc' });
  console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

This would then make a request to the remote endpoint, passing the complex object as JSON. For example, if your datasource is configured for GET requests:

```
<RemoteEndpoint>?<PaginationParameters>&
sortArguments=%7B%22firstName%22%3A%22desc%22%2C%22lastName%22%3A%22asc%22%7D
```

## Filtering

AJAX datasource perform filterings operations through sending search parameters to the remote endpoint so it can perform the actual filtering operations.

For example, when you use below line of code:

```javascript
  let datasource = new AjaxDatasource({ ajax: '<RemoteEndpoint>' });
  await datasource.search('John');
  console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

The datasource will make a AJAX request to the remote endpoint with the follwoing URL as follows, if the datasource is configured for GET requests:

```
<RemoteEndpoint>?<PaginationParameters>&searchArguments=john
```

Note that if you provide an object to the search method as a argument, it'll be converted to JSON so it can be sent to the remote endpoint.

For example:

```javascript
  let datasource = new AjaxDatasource({ ajax: '<RemoteEndpoint>' });
  await datasource.search({'searchText':'John'});
  console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

The above would make a HTTP request in the below format:

```
<RemoteEndpoint>?<PaginationParameters>&searchArguments=%7B%searchText%22%3A%22John%22%7D
```

## Multi-Column Filtering

To perform multiple column filtering, simply provide a complex object for filtering. The object can have any parameters as long as your remote endpoint handles it accordingly. For example:

```javascript
  let datasource = new AjaxDatasource({ ajax: '<RemoteEndpoint>' });
  await datasource.search({ 'firstName': 'John', 'lastName': 'Smith' });
  console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

This would then make a request to the remote endpoint, passing the complex object as JSON. For example, if your datasource is configured for GET requests:

```
<RemoteEndpoint>?<PaginationParameters>&
searchArguments=%7B%22firstName%22%3A%22John%22%2C%22lastName%22%3A%22Smith%22%7D
```

## Overriding AJAX

The `ajax` option can take in either a:
- `String` representing the url of remote endpoint.
- `Function` representing a callback function when data is requested.
- `Object` with various AJAX options. See the `AjaxDatasource` API docs for more details.

Take for example, if you want to perform sorting/filtering locally, you can do this by overriding the `ajax` option with your own function that performs AJAX operations, but performs sorting/filtering locally.

For example:

```javascript
let datasource = new AjaxDatasource({
  ajax: async (queryBuilder) => {
    // Perform remote AJAX
    let data = await $.get("<remoteEndpoint>?" + queryBuilder.getQueryString());
    let sortArgs = this.sortArguments;
    let filterArgs = this.filterArguments;
    // ... Now perform local sorting/filtering operations against data
    return data;
  }
});
```

## QueryBuilder

### Adjust Parameters to Send

If you want to adjust the parameters passed to the remote endpoint, you can provide the QueryBuilder instance passed to the AJAX datasource, with the `serialiseToQueryObject` callback configured.

Within that callback, you can rename your parameters, or adjust the values.

```javascript
import { AjaxDatasource, QueryBuilder } from 'mitch-datasource';

let datasource = new AjaxDatasource({
  // ...
  queryBuilder: new QueryBuilder({
    // ...
    serialiseToQueryObject(datasource) {
      // Calls the original default serialiser
      let queryObject = QueryBuilder.prototype
                        .defaults.serialiseToQueryObject(datasource);
      // E.g. We want to rename the parameter
      // 'offset', to 'start'.
      queryObject.start = queryObject.offset;
      delete queryObject.offset;

      return queryObject;
    }
  })
});
```

### Full Options

```javascript
import { AjaxDatasource, QueryBuilder } from 'mitch-datasource';

let datasource = new AjaxDatasource({
  // ...
  queryBuilder: new QueryBuilder({
    // ...
    serialiseToQueryObject(datasource) {
      // Calls the original default serialiser
      let queryObject = QueryBuilder.prototype
                        .defaults.serialiseToQueryObject(datasource);
      // ... Do your additional operations
      return queryObject;
    },
    serialiseToQueryString(objectToSerialise) {
      // Calls the original default serialiser
      let queryString = QueryBuilder.prototype
                        .defaults.serialiseToQueryString(objectToSerialise);
      // ... Do your additional operations
      return queryString;
    },
    queryStringOptions: {
      // Keep the default options
      ...QueryBuilder.prototype.defaults.queryStringOptions,
      // ... Put additional options here. It'll override default options
      // For available options, check the docs for QueryBuilder constructor
    }
  })
});
```

## Events

Event Name | Description
--- | ---
`updatestart` | Fired when the update has started, i.e. before the datasource has sent the request to the remote endpoint.
`updateend` | Fired when the update has completed, i.e. after the datasource has sent the request to the remote endpoint, and when the remote endpoint providede a response.
`requeststart` | Fired when the AJAX handler has been cosntructed, and request is about to be sent to the remote endpoint.
`requestend` | Fired when the AJAX request has been completed, and raw response has been received from the server.

### Update Start

You can attach to the `updatestart` event with a callback function that accepts an objects with the following fields:

Parameter Name | Type | Description
--- | --- |---
`sender` | `Object` | The sender (i.e. the datasource) that triggered this event.
`preventDefault` | `Function` | You can call this to prevent/cancel the request to the remote endpoint.
`prevented` | `boolean` | You can set this to true to prevent/cancel the request to the remote endpoint. Note that using `preventDefault` is preferred, and is more similar to common DOM events.

For example:

```javascript
let datasource = new AjaxDatasource(dsOptions);
datasource.on('updatestart', function(e) {
  e.preventDefault(); // This stops it from actually updating
  console.log(e);
});
const updateResponse = await datasource.update();
console.log(updateResponse); // null
```

### Update End

You can attach to the `updateend` event with a callback function that accepts an objects with the following fields:

Parameter Name | Type | Description
--- | --- |---
`sender` | `Object` | The sender (i.e. the datasource) that triggered this event.
`response` | `*` | The response from the remote endpoint.


```javascript
let datasource = new AjaxDatasource(dsOptions);
datasource.on('updateend', function(e) {
  console.log(e);
});
const updateResponse = await datasource.update();
console.log(updateResponse); // updateResponse && e.response is the same object
```

### Request Start

You can attach to the `requeststart` event with a callback function that accepts an objects with the following fields:

Parameter Name | Type | Description
--- | --- |---
`sender` | `Object` | The sender (i.e. the datasource) that triggered this event.
`preventDefault` | `Function` | You can call this to prevent/cancel the request to the remote endpoint.
`prevented` | `boolean` | You can set this to true to prevent/cancel the request to the remote endpoint. Note that using `preventDefault` is preferred, and is more similar to common DOM events.
`ajaxHandler` | `Function` | The function to handle the AJAX call. This can be changed if you want to modify how the ajax call is handled.

```javascript
let datasource = new AjaxDatasource(dsOptions);
datasource.on('requeststart', function(e) {
  e.preventDefault(); // This stops it from actually sending AJAX request and updating the data
  console.log(e);
});
const updateResponse = await datasource.update();
console.log(updateResponse);
```

### Request End

datasource.on('requestend', function(e) {
You can attach to the `requeststart` event with a callback function that accepts an objects with the following fields:

Parameter Name | Type | Description
--- | --- |---
`sender` | `Object` | The sender (i.e. the datasource) that triggered this event.
`response` | `*` | The response from the remote endpoint.

```javascript
let datasource = new AjaxDatasource(dsOptions);
datasource.on('requestend', function(e) {
  console.log(e);
});
const updateResponse = await datasource.update();
console.log(updateResponse);
```
