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
            <h4>Search</h4>
            <input type="text" v-model="inputSearchText"/>
            <button @click="search(inputSearchText)">Search</button>
          </td>
          <td>
            <h4>Single Column Sort</h4>
            <div>
              <button @click="clearSort()">Clear Sort</button>
            </div>
            <div>
              <button @click="toggleSort('id')">ID</button>
            </div>
            <div>
              <button @click="toggleSort('firstName')">First Name</button>
            </div>
            <div>
              <button @click="toggleSort('lastName')">Last Name</button>
            </div>
            <div>
              <button @click="toggleSort('job')">Job</button>
            </div>
            <div>
              <button @click="toggleSort('gender')">Gender</button>
            </div>
            <div>
              <button @click="toggleSort('hasCitizenship')">Has Citizenship</button>
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
      // State for input fields
      inputSize: 0,
      inputPageToGoTo: '',
      inputSearchText: '',
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
    async search(searchText) {
      await this.$props.datasource.search(searchText);
    },
    async toggleSort(field) {
      let direction = 'asc';
      // Toggle to descending if already sorting
      // the field in ascending order
      if (this.$props.datasource.sortArguments && Object.keys(this.$props.datasource.sortArguments).length === 1
          && this.$props.datasource.sortArguments[field] === 'asc') {
            direction = 'desc';
      }
      let sortArguments = {};
      sortArguments[field] = direction;
      await this.$props.datasource.sort(sortArguments);
    },
    async clearSort() {
      await this.$props.datasource.sort();
    }
  }
}
</script>
