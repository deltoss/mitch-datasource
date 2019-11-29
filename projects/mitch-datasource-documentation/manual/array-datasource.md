# Array Datasource

```javascript
import { ArrayDatasource } from 'mitch-datasource';

let datasource = new ArrayDatasource({
  data: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: 'Jane'
    },
    // ... More
  ]
});
await datasource.update();
console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

## Sorting

To perform sorting, you'll need to perform the below adjustments to your datasource:

-   Provide a `sort` function to the datasource options, which performs sorting on your dataset. It contains the below parameters:

    | Parameter Name  | Type    | Description                                                                                                        |
    | --------------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
    | `data`          | `Array` | The data to sort                                                                                                   |
    | `sortArguments` | `*`     | The sort arguments. Can be any type. It depends on what gets passed when the datasource `sort` method gets called. |

-   Call the datasource `sort` method, or alternatively, set the `sortArguments` property of the datasource, and then call the datasource `update` method.

See below example on defining the `sort` function for the datasource options.

```javascript
let datasource = new ArrayDatasource({
  data: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: 'Jane'
    },
    // ... More
  ],
  sort: function(data, sortArguments = { 'firstName': 'asc' }) {
    // Clone data so you don't accidentally sort
    // the original object
    let sortedData = [ ...data ];
    // Perform sorting operations on the array of data here
    if (sortArguments['lastName'] 
      && sortArguments['lastName'].toLowerCase().indexOf('asc') > 0) {
      sortedData.sort((a, b) => {
        if (a['lastName'] > b['lastName']) {
          return 1;
        }
        if (a['lastName'] < b['lastName']) {
          return -1;
        }
      });
    } else if (sortArguments['lastName'] 
      && sortArguments['lastName'].toLowerCase().indexOf('desc') > 0) {
      sortedData.sort((a, b) => {
        if (a['lastName'] <> b['lastName']) {
          return 1;
        }
        if (a['lastName'] > b['lastName']) {
          return -1;
        }
      });
    }
    return sortedData;
  }
});
```

Now with your datasource, simply call `sort`. Note that you can pass in anything to the `sort` call, and it'll get directly passed to the `sort` callback above as the `sortArguments` parameter.

```javascript
await datasource.sort({ 'lastName': 'asc' });
```

## Multi-Column Sorting

The datasource can be configured for multi-column sorting. Recall the above sorting example works by passing the argument you provided in the datasource `sort` method to the `sort` callback. You can pass in anything to the `sort` call, and it'll get directly passed to the `sort` callback above as the `sortArguments` parameter. This means you can pass in a complex object that specifies how to do your multi-column sorting.

Take for example:

```javascript
await datasource.sort({ 'firstName': 'desc', 'lastName': 'asc' });
```

And then you can specify in the `sort` callback as follows:

```javascript
let datasource = new ArrayDatasource({
  // ...
  sort: function(data, sortArguments = { 'firstName': 'asc' }) {
    // Clone data so you don't accidentally sort
    // the original object
    let sortedData = [ ...data ];
    
    // This will output: { 'firstName': 'desc', 'lastName': 'asc' }
    console.log(sortArguments);
    // ... Perform multi-column sorting
    
    return sortedData;
  }
});
```

For an in-depth example, see the below projects of the repository which has multi-column sorting:

-   `mitch-datasource-test`
-   `mitch-datasource-test-react`
-   `mitch-datasource-test-vue`

## Filtering

To perform filtering, you'll need to perform the below adjustments to your datasource:

-   Provide a `search` function to the datasource options, which performs filtering on your dataset. It contains the below parameters:

    | Parameter Name    | Type    | Description                                                                                                            |
    | ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
    | `data`            | `Array` | The data to sort                                                                                                       |
    | `searchArguments` | `*`     | The search arguments. Can be any type. It depends on what gets passed when the datasource `search` method gets called. |

-   Call the datasource `search` method, or alternatively, set the `searchArguments` property of the datasource, and then call the datasource `update` method.

See below example on defining the `search` function for the datasource options.

```javascript
let datasource = new ArrayDatasource({
  data: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: 'Jane'
    },
    // ... More
  ],
  search: function(data, searchArguments) {
    if (!searchArguments) {
      return data;
    }
    return data.filter((value) => {
      // Simple search logic by doing
      // a text search on the concatenation
      // of all the searchable fields
      const searchableText = `${value.firstName
      } ${value.lastName
      } ${value.job
      } ${value.gender}`;
      return searchableText.indexOf(searchArguments) > -1;
    });
  }
});
```

Now with your datasource, simply call `search`. Note that you can pass in anything to the `search` call, and it'll get directly passed to the `search` callback above as the `searchArguments` parameter.

```javascript
// ...
await datasource.search('John');
// ...
```

Alternatively, you can use:

```javascript
// ...
datasource.searchArguments = 'John';
await datasource.update();
// ...
```

## Multi-Column Filtering

The datasource can be configured for multi-column filtering. Recall the above filtering example works by passing the argument you provided in the datasource `search` method to the `search` callback. You can pass in anything to the `search` call, and it'll get directly passed to the `search` callback above as the `searchArguments` parameter. This means you can pass in a complex object that specifies how to do your multi-column sorting.

Take for example:

```javascript
await datasource.search({ 'firstName': 'John', 'lastName': 'Smith' });
```

And then you can specify in the `search` callback as follows:

```javascript
let datasource = new ArrayDatasource({
  // ...
  search: function(data, searchArguments) {
    if (!searchArguments) {
      return data;
    }
    // Clone data so you don't accidentally filter
    // the original object
    let filteredData = [ ...data ];
    
    // This will output: { 'firstName': 'John', 'lastName': 'Smith' }
    console.log(searchArguments);
    // ... Perform multi-column filtering
    
    return filteredData;
  }
});
```

For an in-depth example, see the below projects of the repository which has multi-column searching:

-   `mitch-datasource-test`
-   `mitch-datasource-test-react`
-   `mitch-datasource-test-vue`

## Events

| Event Name    | Description                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatestart` | Fired when the update has started, i.e. before the datasource has completed all the data minipulation operations (e.g. sorting, filtering & pagination).  |
| `updateend`   | Fired when the update has completed, i.e. after the datasource has completed all the data minipulation operations (e.g. sorting, filtering & pagination). |

### Update Start

You can attach to the `updatestart` event with a callback function that accepts an objects with the following fields:

| Parameter Name   | Type       | Description                                                                                                                                                                                                  |
| ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sender`         | `Object`   | The sender (i.e. the datasource) that triggered this event.                                                                                                                                                  |
| `preventDefault` | `Function` | You can call this to prevent/cancel the data minipulation (e.g. sorting, filtering & pagination) operations.                                                                                                 |
| `prevented`      | `boolean`  | You can set this to true to prevent/cancel the data minipulation (e.g. sorting, filtering & pagination) operations. Note that using `preventDefault` is preferred, and is more similar to common DOM events. |

For example:

```javascript
let datasource = new ArrayDatasource(dsOptions);
datasource.on('updatestart', function(e) {
  e.preventDefault(); // This stops it from actually updating
  console.log(e);
});
const updateResponse = await datasource.update();
console.log(updateResponse); // null
```

### Update End

You can attach to the `updateend` event with a callback function that accepts an objects with the following fields:

| Parameter Name | Type     | Description                                                                                      |
| -------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `sender`       | `Object` | The sender (i.e. the datasource) that triggered this event.                                      |
| `response`     | `Array`  | The array of data after the data manipulation operations (e.g. sorting, filtering & pagination). |

```javascript
let datasource = new ArrayDatasource(dsOptions);
datasource.on('updateend', function(e) {
  console.log(e);
});
const updateResponse = await datasource.update();
console.log(updateResponse); // updateResponse && e.response is the same object
```
