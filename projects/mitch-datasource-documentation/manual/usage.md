# Usage

## Basic Usage

To find documentation on the possible options to pass, or methods & properties provided by the datasources, refer to the api documentation. Otherwise, below are usage examples to demonstrate how you may the datasource.

### Array

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

### Ajax

AJAX Datasource is configured to contact a remote endpoint.
Given an endpoint, by default, it'll pass the below parameters either as query string, or as part of the request data:

Parameter Name | Description
--- | ---
offset | The pagination offset. It skips the specified amount of items when querying.
page | The page number for data pagination.
size | The pagination size, i.e. the number of records per page.
searchText | May not be included (i.e. it's optional). The text to search for. Used to filter the data items.
sortArguments | May not be included (i.e. it's optional). The sort arguments object, for specific or multi-column sorting purposes.
searchArguments | May not be included (i.e. it's optional). The search arguments object, for specific or multi-column searching purposes.

#### Minimal Configuration:

```javascript
import { AjaxDatasource } from 'mitch-datasource';

let datasource = new AjaxDatasource({
  ajax: 'https://path/to/remote/endpoint'
});
await datasource.update();
console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

#### With Mapper

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

#### QueryBuilder

##### Adjust Parameters to Send

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

##### Full Options

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

### With Components

It's not only primitives that can be passed onto client-side framework components.
Objects can be passed, meaning we can pass in the datasource objects, and the components' main responsibility is simply to wire up the UI to the datasource.

When a component needs to perform pagination, filtering, sorting, it'll use the datasoure methods and properties.

#### Vue Example

How we pass the datasource to the Vue component:

```javascript

```

Our example component `SimpleTable.vue`:

```html
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datasource.data" :key="item.id">
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
        </tr>
      </tbody>
    </table>
    <br/>
    <table border="1">
      <tbody>
        <tr>
          <td>
            <div>Page {{ datasource.page }} of {{ datasource.totalPages }}</div>
            <div>Total: {{ datasource.total }}</div>
            <div>Total Items on Page: {{ datasource.pageTotal }}</div>
            <div>Size: {{ datasource.size }}</div>
            <div>Offset: {{ datasource.offset }}</div>
          </td>
          <td>
            <h4>Pagination</h4>
            <button @click="firstPage()">&lt;&lt;</button>
            <button @click="prevPage()">&lt;</button>
            &nbsp;&nbsp;
            <input type="number" v-model="pageToGoTo"/>
            <button @click="goToPage(pageToGoTo)">Go</button>
            &nbsp;&nbsp;
            <button @click="nextPage()">&gt;</button>
            <button @click="lastPage()">&gt;&gt;</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SimpleTable',
  props: {
    datasource: Object
  },
  data() {
    return {
      loading: this.$props.datasource.loading,
      size: this.$props.datasource ? this.$props.datasource.size : 0,
      pageToGoTo: '',
      searchText: '',
    }
  },
  created: async function () {
    this.loading = this.$props.datasource.loading;
    this.$props.datasource.on('updatestart', this.updateStartCallback);
    this.$props.datasource.on('updateend', this.updateEndCallback);
  },
  beforeDestroy: function() {
    this.$props.datasource.off('updatestart', this.updateStartCallback);
    this.$props.datasource.off('updateend', this.updateEndCallback);
  },
  methods: {
    async nextPage() {
      let success = await this.datasource.nextPage();
      if (!success) {
        console.warn('Failed to go to next page...');
      }
    },
    async prevPage() {
      let success = await this.datasource.prevPage();
      if (!success) {
        console.warn('Failed to go to previous page...');
      }
    },
    async goToPage(page) {
      let success = await this.datasource.goToPage(page);
      if (!success) {
        console.warn(`Failed to go to page ${page}...`);
      }
    },
    async lastPage() {
      await this.goToPage(this.datasource.totalPages);
    },
    async firstPage() {
      await this.goToPage(1);
    },
  }
}
</script>
```

#### React Example



## Advanced Usage

### Sorting

### Multi-Column Sorting

### Filtering

### Multi-Column Filtering

### Events

### Making your own Custom Datasource

### Modifying the Defaults

## Additional Information

For more information on the usage:
* Open up and view the example files inside the repository for:
  * [Unit Tests](https://github.com/deltoss/mitch-datasource/mitch-datasource-test/src)
  * [React Example](https://github.com/deltoss/mitch-datasource/mitch-datasource-test-react/src)
  * [Vue Example](https://github.com/deltoss/mitch-datasource/mitch-datasource-test-vue/src)
* Refer to the API documentations.