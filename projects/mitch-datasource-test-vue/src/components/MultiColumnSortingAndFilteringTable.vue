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
            <br/>
            <div>Search Text: {{ componentData.searchText }}</div>
            <div>Search Arguments: {{ componentData.searchArguments }}</div>
            <div>Sort Arguments: {{ componentData.sortArguments }}</div>
          </td>
          <td>
            <h4>Pagination</h4>
            Size: <input type="number" v-model="inputSize"/> <button @click="updateDatasourceSize(inputSize)">Update</button>
            <br />
            <button @click="firstPage()">&lt;&lt;</button>
            <button @click="prevPage()">&lt;</button>
            &nbsp;&nbsp;
            <input type="number" v-model="inputPageToGoTo"/>
            <button @click="goToPage(inputPageToGoTo)">Go</button>
            &nbsp;&nbsp;
            <button @click="nextPage()">&gt;</button>
            <button @click="lastPage()">&gt;&gt;</button>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Multi Column Search</h4>
            <div>
              <label>ID:</label> <input type="text" v-model="inputMultiColumnSearchArguments.id"/>
            </div>
            <div>
              <label>First Name:</label> <input type="text" v-model="inputMultiColumnSearchArguments.firstName"/>
            </div>
            <div>
              <label>Last Name:</label> <input type="text" v-model="inputMultiColumnSearchArguments.lastName"/>
            </div>
            <div>
              <label>Job:</label> <input type="text" v-model="inputMultiColumnSearchArguments.job"/>
            </div>
            <div>
              <label>Gender:</label> <input type="text" v-model="inputMultiColumnSearchArguments.gender"/>
            </div>
            <div>
              <label>Has Citizenship:</label> <input type="text" v-model="inputMultiColumnSearchArguments.hasCitizenship"/>
            </div>
            <button @click="multiColumnSearch()">Search</button>
          </td>
          <td>
            <h4>Multi Column Sort</h4>
            <div>
              <label>ID:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="inputMultiColumnSortArguments.id"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="inputMultiColumnSortArguments.id"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="inputMultiColumnSortArguments.id"/>
            </div>
            <div>
              <label>First Name:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="inputMultiColumnSortArguments.firstName"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="inputMultiColumnSortArguments.firstName"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="inputMultiColumnSortArguments.firstName"/>
            </div>
            <div>
              <label>Last Name:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="inputMultiColumnSortArguments.lastName"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="inputMultiColumnSortArguments.lastName"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="inputMultiColumnSortArguments.lastName"/>
            </div>
            <div>
              <label>Job:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="inputMultiColumnSortArguments.job"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="inputMultiColumnSortArguments.job"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="inputMultiColumnSortArguments.job"/>
            </div>
            <div>
              <label>Gender:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="inputMultiColumnSortArguments.gender"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="inputMultiColumnSortArguments.gender"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="inputMultiColumnSortArguments.gender"/>
            </div>
            <div>
              <label>Has Citizenship:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="inputMultiColumnSortArguments.hasCitizenship"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="inputMultiColumnSortArguments.hasCitizenship"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="inputMultiColumnSortArguments.hasCitizenship"/>
            </div>
            <button @click="multiColumnSort()">Sort</button>
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
      // State for input fields
      inputSize: 0,
      inputPageToGoTo: '',
      inputMultiColumnSearchArguments: {
        id: null,
        firstName: null,
        lastName: null,
        job: null,
        gender: null,
        hasCitizenship: null,
      },
      inputMultiColumnSortArguments: {
        id: null,
        firstName: null,
        lastName: null,
        job: null,
        gender: null,
        hasCitizenship: null,
      },
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
    async updateDatasourceSize(size) {
      this.$props.datasource.size = parseInt(size);
      await this.$props.datasource.update();
    },
    async nextPage() {
      let success = await this.$props.datasource.nextPage();
      if (!success) {
        alert('Failed to go to next page...');
      }
    },
    async prevPage() {
      let success = await this.$props.datasource.prevPage();
      if (!success) {
        alert('Failed to go to previous page...');
      }
    },
    async goToPage(page) {
      let success = await this.$props.datasource.goToPage(page);
      if (!success) {
        alert(`Failed to go to page ${page}...`);
      }
    },
    async lastPage() {
      await this.goToPage(this.$props.datasource.totalPages);
    },
    async firstPage() {
      await this.goToPage(1);
    },
    async multiColumnSearch() {
      if (!this.inputMultiColumnSearchArguments) {
        return;
      }
      const entries = Object.entries(this.inputMultiColumnSearchArguments);
      if (entries.length === 0) {
        return;
      }
      let actualSearchArguments = {};
      entries.forEach(function(value) {
        const searchField = value[0];
        const searchValue = value[1];
        if (searchValue) {
          actualSearchArguments[searchField] = searchValue;
        }
      });
      await this.datasource.search(actualSearchArguments);
    },
    async multiColumnSort() {
      if (!this.inputMultiColumnSortArguments) {
        return;
      }
      const entries = Object.entries(this.inputMultiColumnSortArguments);
      if (entries.length === 0) {
        return;
      }
      let actualSortArguments = {};
      entries.forEach(function(value) {
        const sortField = value[0];
        const sortDirection = value[1];
        if (sortDirection) {
          actualSortArguments[sortField] = sortDirection;
        }
      });
      await this.datasource.sort(actualSortArguments);
    }
  }
}
</script>
