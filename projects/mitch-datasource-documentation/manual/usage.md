# Usage

To find documentation on the possible options to pass, or methods & properties provided by the datasources, refer to the api documentation. Otherwise, below are usage examples to demonstrate how you may the datasource.

## Array Datasource

See [Array Datasource](./array-datasource.html).

## AJAX Datasource

See [AJAX Datasource](./ajax-datasource.html).

## With Components

It's not only primitives that can be passed onto client-side framework components.
Objects can be passed, meaning we can pass in the datasource objects, and the components' main responsibility is simply to wire up the UI to the datasource.

When a component needs to perform pagination, filtering, sorting, it'll use the datasoure methods and properties.

### Vue Example

This package has been tested to work with `Vue`. You can clone the repo and then take a look at the `mitch-datasource-test-vue` project folder. Alternatively, you can see below sandbox and code for a more simplified version which only has pagination.

[![Edit mitch-datasource with Vue](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-jv16s?fontsize=14&hidenavigation=1&theme=dark)

Example component `MinimalTable`, which uses the datasource (which gets passed to the component as a property) to display data and perform pagination logic:

```html
<template>
  <div>
    <div v-if="!datasource" style="color: crimson;">
      No datasource supplied
    </div>
    <div v-else-if="componentData.loading" style="color: crimson;">
      Loading...
    </div>
    <div v-else-if="!componentData.data || componentData.data.length <= 0" style="color: crimson;">
      No data...
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Job</th>
          <th>Gender</th>
          <th>Has Citizenship?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in componentData.data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.job }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.hasCitizenship ? 'Yes' : 'No' }}</td>
        </tr>
      </tbody>
    </table>
    <br/>
    <table border="1">
      <tbody>
        <tr>
          <td>
            <div>Page {{ componentData.page }} of {{ componentData.totalPages }}</div>
            <div>Total: {{ componentData.total }}</div>
            <div>Total Items on Page: {{ componentData.pageTotal }}</div>
            <div>Size: {{ componentData.size }}</div>
            <div>Offset: {{ componentData.offset }}</div>
          </td>
          <td>
            <h4>Pagination</h4>
            <div>
              <button v-for="value in componentData.totalPages" :key="value" @click="goToPage(value)">
                {{value}}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    datasource: Object
  },
  data() {
    return {
      // Declare component states to sync up with the
      // datasource properties and to display down the road
      componentData: {
        loading: false,
        page: 0,
        totalPages: 0,
        total: 0,
        pageTotal: 0,
        size: 0,
        offset: 0,
        searchText: 0,
        searchArguments: {},
        sortArguments: {},
        data: [],
      }
    }
  },
  created: async function () {
    this.syncComponentWithDatasource();
    this.$props.datasource.on('updatestart', this.syncComponentWithDatasource);
    this.$props.datasource.on('updateend', this.syncComponentWithDatasource);
  },
  beforeDestroy: function() {
    this.$props.datasource.off('updatestart', this.syncComponentWithDatasource);
    this.$props.datasource.off('updateend', this.syncComponentWithDatasource);
  },
  methods: {
    syncComponentWithDatasource() {
      if (!this.$props.datasource) {
        return;
      }
      this.componentData = {
        loading: this.$props.datasource.loading,
        page: this.$props.datasource.page,
        totalPages: this.$props.datasource.totalPages,
        total: this.$props.datasource.total,
        pageTotal: this.$props.datasource.pageTotal,
        size: this.$props.datasource.size,
        offset: this.$props.datasource.offset,
        searchText: this.$props.datasource.searchText,
        searchArguments: this.$props.datasource.searchArguments,
        sortArguments: this.$props.datasource.sortArguments,
        data: this.$props.datasource.data,
      };
    },
    async goToPage(page) {
      let success = await this.$props.datasource.goToPage(page);
      if (!success) {
        alert(`Failed to go to page ${page}...`);
      }
    },
  }
}
</script>
```

The typical `App` component. It declares and initiates a datasource, and then pass it as a property to the `MinimalTable` component.

```html
<template>
  <div id="app">
    <MinimalTable :datasource="datasource"/>
  </div>
</template>

<script>
  import { ArrayDatasource } from 'mitch-datasource'
  import MinimalTable from './components/MinimalTable.vue'

  export default {
    name: 'app',
    data() {
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
      datasource.update();
      return {
        datasource
      };
    },
    components: {
      MinimalTable
    }
  }
</script>
```

### React Example

This package has been tested to work with `React`. You can clone the repo and then take a look at the `mitch-datasource-test-react` project folder. Alternatively, you can see below sandbox and code for a more simplified version which only has pagination.

[![Edit mitch-datasource-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/heuristic-chandrasekhar-j9wrg?fontsize=14&hidenavigation=1&theme=dark)

Example component `MinimalTable`, which uses the datasource (which gets passed to the component as a property) to display data and perform pagination logic:

```jsx
import React, { useState, useCallback, useEffect } from "react";

export default function(props) {
  // Declare component states to sync up with the
  // datasource properties and to display down the road
  const [componentData, setComponentData] = useState({
    loading: false,
    page: 0,
    totalPages: 0,
    total: 0,
    pageTotal: 0,
    size: 0,
    offset: 0,
    searchText: 0,
    searchArguments: {},
    sortArguments: {},
    data: [],
  });

  // Syncs the component's state with the datasource
  let syncComponentWithDatasource = useCallback(() => {
    if (!props.datasource) {
      return;
    }
    setComponentData({
      page: props.datasource.page,
      totalPages: props.datasource.totalPages,
      total: props.datasource.total,
      pageTotal: props.datasource.pageTotal,
      size: props.datasource.size,
      offset: props.datasource.offset,
      data: props.datasource.data,
    });
  }, [props.datasource]);

  // Attach listeners to sync component state
  // when datasource's data changes
  useEffect(() => {
    syncComponentWithDatasource();
    props.datasource.addListener('updatestart', syncComponentWithDatasource);
    props.datasource.addListener('updateend', syncComponentWithDatasource);
    
    // Cleanup called on unmount event
    return () => {
      props.datasource.removeListener('updatestart', syncComponentWithDatasource);
      props.datasource.removeListener('updateend', syncComponentWithDatasource);
    }
  }, [props.datasource, syncComponentWithDatasource]);

  let goToPage = useCallback(async page => {
    let success = await props.datasource.goToPage(page);
    if (!success) {
      alert(`Failed to go to page ${page}...`);
    }
  }, [props.datasource]);

  if (!props.datasource) {
    return <div style={{ color: "crimson" }}>No datasource supplied</div>;
  } else if (!componentData.data || componentData.data.length <= 0) {
    return <div style={{ color: 'crimson' }}> No data... </div>;
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job</th>
              <th>Gender</th>
              <th>Has Citizenship?</th>
            </tr>
          </thead>
          <tbody>
            {componentData.data.map(function(value, index, arr) {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.job}</td>
                  <td>{value.gender}</td>
                  <td>{value.hasCitizenship ? "Yes" : "No"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <table border="1">
          <tbody>
            <tr>
              <td>
                <div>
                  Page {componentData.page} of {componentData.totalPages}
                </div>
                <div>Total: {componentData.total}</div>
                <div>Total Items on Page: {componentData.pageTotal}</div>
                <div>Size: {componentData.size}</div>
                <div>Offset: {componentData.offset}</div>
              </td>
              <td>
                <h4>Pagination</h4>
                <div>
                  {
                    [...Array(componentData.totalPages).keys()].map((value) => {
                      const pageNumber = value + 1;
                      return <button key={pageNumber} onClick={() => { goToPage(pageNumber) }}>{pageNumber}</button>;
                    })
                  }
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
```

The typical `App` component. It declares and initiates a datasource, and then pass it as a property to the `MinimalTable` component.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import MinimalTable from "./components/MinimalTable/MinimalTable";
import { ArrayDatasource } from "mitch-datasource";
import stubData from "./stub-data";

function App() {
  let datasource = new ArrayDatasource({
    data: stubData
  });
  datasource.update();
  return (
    <div className="App">
      <MinimalTable datasource={datasource} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Modifying the Defaults

You can modify the default options for any datasource. For example, for `ArrayDatasource`, you can provide a default sorting logic.

You can create a new file called `ArrayDatasource.js` in your project, which simply imports the original `ArrayDatasource` and override the defaults, then exports the redefined ArrayDatasource.

```javascript
  import { ArrayDatasource } from 'mitch-datasource';

  ArrayDatasource.prototype.defaults.sort = function(data, sortArguments = { 'firstName': 'asc' }) {
    let sortedData = { ...data }; // Clone data, so sorting doesn't affect the original object
    // Perform sorting operations here
    return sortedData;
  };
  
  export default ArrayDatasource;
```

Then, in another file, you can import the redefined `ArrayDatasource`
from `ArrayDatasource.js` file, and use it as follows:

```javascript

import ArrayDatasource from './ArrayDatasource';

let datasource = new ArrayDatasource({
  data: stubData
});
await datasource.sort();
console.log(`First page of data: ${JSON.stringify(datasource.data)}`);
```

## Additional Information

For more information on the usage:

-   Open up and view the example files inside the repository for:
    -   [Unit Tests](https://github.com/deltoss/mitch-datasource/mitch-datasource-test/src)
    -   [React Example](https://github.com/deltoss/mitch-datasource/mitch-datasource-test-react/src)
    -   [Vue Example](https://github.com/deltoss/mitch-datasource/mitch-datasource-test-vue/src)

-   Refer to the API documentations
