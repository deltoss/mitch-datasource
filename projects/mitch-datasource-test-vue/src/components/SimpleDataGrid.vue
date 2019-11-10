<template>
  <div>
    <h3>DataGrid for Datasource Testing Purposes</h3>
    <div v-if="!datasource" style="color: crimson;">
      No datasource supplied
    </div>
    <div v-else-if="loading" style="color: crimson;">
      Loading...
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
        <tr v-for="item in datasource.data" :key="item.id">
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
            <div>Page {{ datasource.page }} of {{ datasource.totalPages }}</div>
            <div>Total: {{ datasource.total }}</div>
            <div>Total Items on Page: {{ datasource.pageTotal }}</div>
            <div>Size: {{ datasource.size }}</div>
            <div>Offset: {{ datasource.offset }}</div>
            <br/>
            <div>Search Text: {{ datasource.searchText }}</div>
            <div>Search Arguments: {{ datasource.searchArguments }}</div>
            <div>Sort Arguments: {{ datasource.sortArguments }}</div>
          </td>
          <td>
            <h4>Pagination</h4>
            Size: <input type="number" v-model="size"/> <button @click="updateDatasourceSize(size)">Update</button>
            <br />
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
        <tr>
          <td>
            <h4>Search</h4>
            <input type="text" v-model="searchText"/>
            <button @click="search(searchText)">Search</button>
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
  name: 'SimpleDataGrid',
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
    updateStartCallback() {
      this.loading = true;
    },
    updateEndCallback() {
      this.loading = false;
    },
    async updateDatasourceSize(size) {
      this.datasource.size = size;
      await this.$props.datasource.update();
    },
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
    async search(searchText) {
      await this.datasource.search(searchText);
    },
    async toggleSort(field) {
      let direction = 'asc';
      // Toggle to descending if already sorting
      // the field in ascending order
      if (this.datasource.sortArguments && Object.keys(this.datasource.sortArguments).length === 1
          && this.datasource.sortArguments[field] === 'asc') {
            direction = 'desc';
      }
      let sortArguments = {};
      sortArguments[field] = direction;
      await this.datasource.sort(sortArguments);
    },
    async clearSort() {
      await this.datasource.sort();
    }
  }
}
</script>
