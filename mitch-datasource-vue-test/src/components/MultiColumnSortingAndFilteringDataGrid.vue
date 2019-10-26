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
          </td>
        </tr>
        <tr>
          <td>
            <h4>Multi Column Search</h4>
            <div>
              <label>ID:</label> <input type="text" v-model="multiColumnSearchArguments.id"/>
            </div>
            <div>
              <label>First Name:</label> <input type="text" v-model="multiColumnSearchArguments.firstName"/>
            </div>
            <div>
              <label>Last Name:</label> <input type="text" v-model="multiColumnSearchArguments.lastName"/>
            </div>
            <div>
              <label>Job:</label> <input type="text" v-model="multiColumnSearchArguments.job"/>
            </div>
            <div>
              <label>Gender:</label> <input type="text" v-model="multiColumnSearchArguments.gender"/>
            </div>
            <div>
              <label>Has Citizenship:</label> <input type="text" v-model="multiColumnSearchArguments.hasCitizenship"/>
            </div>
            <button @click="multiColumnSearch()">Search</button>
          </td>
          <td>
            <h4>Multi Column Sort</h4>
            <div>
              <label>ID:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="multiColumnSortArguments.id"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="multiColumnSortArguments.id"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="multiColumnSortArguments.id"/>
            </div>
            <div>
              <label>First Name:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="multiColumnSortArguments.firstName"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="multiColumnSortArguments.firstName"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="multiColumnSortArguments.firstName"/>
            </div>
            <div>
              <label>Last Name:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="multiColumnSortArguments.lastName"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="multiColumnSortArguments.lastName"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="multiColumnSortArguments.lastName"/>
            </div>
            <div>
              <label>Job:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="multiColumnSortArguments.job"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="multiColumnSortArguments.job"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="multiColumnSortArguments.job"/>
            </div>
            <div>
              <label>Gender:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="multiColumnSortArguments.gender"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="multiColumnSortArguments.gender"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="multiColumnSortArguments.gender"/>
            </div>
            <div>
              <label>Has Citizenship:</label>
              <br/>
              <label>None</label> <input type="radio" value="" v-model="multiColumnSortArguments.hasCitizenship"/>
              <label>Asc</label> <input type="radio" value="asc" v-model="multiColumnSortArguments.hasCitizenship"/>
              <label>Desc</label> <input type="radio" value="desc" v-model="multiColumnSortArguments.hasCitizenship"/>
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
  name: 'MultiColumnSortingAndFilteringDataGrid',
  props: {
    datasource: Object
  },
  data() {
    return {
      loading: true,
      size: this.$props.datasource.size,
      pageToGoTo: null,
      multiColumnSearchArguments: {
        id: null,
        firstName: null,
        lastName: null,
        job: null,
        gender: null,
        hasCitizenship: null,
      },
      multiColumnSortArguments: {
        id: null,
        firstName: null,
        lastName: null,
        job: null,
        gender: null,
        hasCitizenship: null,
      }
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
    async multiColumnSearch() {
      if (!this.multiColumnSearchArguments) {
        return;
      }
      const entries = Object.entries(this.multiColumnSearchArguments);
      if (entries.length === 0) {
        return;
      }
      this.loading = true;
      let actualSearchArguments = {};
      entries.forEach(function(value) {
        const searchField = value[0];
        const searchValue = value[1];
        if (searchValue) {
          actualSearchArguments[searchField] = searchValue;
        }
      });
      await this.datasource.search(actualSearchArguments);
      this.loading = false;
    },
    async multiColumnSort() {
      if (!this.multiColumnSortArguments) {
        return;
      }
      const entries = Object.entries(this.multiColumnSortArguments);
      if (entries.length === 0) {
        return;
      }
      this.loading = true;
      let actualSortArguments = {};
      entries.forEach(function(value) {
        const sortField = value[0];
        const sortDirection = value[1];
        if (sortDirection) {
          actualSortArguments[sortField] = sortDirection;
        }
      });
      await this.datasource.sort(actualSortArguments);
      this.loading = false;
    }
  }
}
</script>
