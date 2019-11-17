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
