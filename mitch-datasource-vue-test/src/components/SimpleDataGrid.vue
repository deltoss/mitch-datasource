<template>
  <div class="simple-data-grid">
    <h3>Simple DataGrid for Datasource Testing Purposes</h3>
    <div v-if="loading" style="color: crimson;">
      Loading...
    </div>
    <table v-else class="simple-data-grid">
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
    <div class="simple-data-grid-info">
      <br />
      <div>Page {{ datasource.page }} of {{ datasource.totalPages }}</div>
      <div>Total: {{ datasource.total }}</div>
      <div>Total Items on Page: {{ datasource.pageTotal }}</div>
      <div>Size: {{ datasource.size }}</div>
      <div>Offset: {{ datasource.offset }}</div>
      <br/>
      <div>Search Text: {{ datasource.searchText }}</div>
      <div>Sort Field: {{ datasource.sortField }}</div>
      <div>Sort Direction: {{ datasource.sortDirection }}</div>
    </div>
    <div class="simple-data-grid-controls">
      <div>
        <h4>Pagination</h4>
        Size: <input type="number" v-model="size"/> <button @click="setSize(size)">Update</button>
        <br />
        <button @click="firstPage()">&lt;&lt;</button>
        <button @click="prevPage()">&lt;</button>
        &nbsp;&nbsp;
        <input type="number" v-model="pageToGoTo"/>
        <button @click="goToPage(pageToGoTo)">Go</button>
        &nbsp;&nbsp;
        <button @click="nextPage()">&gt;</button>
        <button @click="lastPage()">&gt;&gt;</button>
      </div>
      <div>
        <h4>Search</h4>
        <input type="text" v-model="searchText"/>
        <button @click="search(searchText)">Search</button>
      </div>
      <div>
        <h4>Sort by</h4>
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
      </div>
    </div>
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
      loading: true,
      size: this.$props.datasource.size,
      pageToGoTo: null,
      searchText: null
    }
  },
  created: async function () {
    this.loading = true;
    await this.datasource.update();
    this.loading = false;
  },
  methods: {
    async setSize(size) {
      this.loading = true;
      this.datasource.size = size;
      await this.datasource.update();
      this.loading = false;
    },
    async nextPage() {
      this.loading = true;
      let success = await this.datasource.nextPage();
      if (!success) {
        console.warn('Failed to go to next page...');
      }
      this.loading = false;
    },
    async prevPage() {
      this.loading = true;
      let success = await this.datasource.prevPage();
      if (!success) {
        console.warn('Failed to go to previous page...');
      }
      this.loading = false;
    },
    async lastPage() {
      await this.goToPage(this.datasource.totalPages);
    },
    async firstPage() {
      await this.goToPage(1);
    },
    async goToPage(page) {
      this.loading = true;
      let success = await this.datasource.goToPage(page);
      if (!success) {
        console.warn(`Failed to go to page ${page}...`);
      }
      this.pageToGoTo = null;
      this.loading = false;
    },
    async search(searchText) {
      this.loading = true;
      await this.datasource.search(searchText);
      this.loading = false;
    },
    async toggleSort(field) {
      this.loading = true;
      let direction = 'asc';
      // Toggle to descending if already sorting the field
      // in ascending order
      if (this.datasource.sortField === field 
          && this.datasource.sortDirection === 'asc') {
            direction = 'desc';
      }
      await this.datasource.sort(field, direction);
      this.loading = false;
    },
    async clearSort() {
      this.loading = true;
      await this.datasource.sort();
      this.loading = false;
    }
  }
}
</script>
