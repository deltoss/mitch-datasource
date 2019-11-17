import { storiesOf } from '@storybook/vue';
import MinimalTable from '../components/MinimalTable';
import SimpleTable from '../components/SimpleTable';
import MultiColumnSortingAndFilteringTable from '../components/MultiColumnSortingAndFilteringTable';
import { ArrayDatasource, AjaxDatasource } from 'mitch-datasource';
import { 
  stubDataArray,
  mockAjaxCall,
  mockFilterLogic,
  mockSortLogic
} from 'mitch-datasource-test-utilities';

const arrayDsOptions = {
  size: 10,
  data: stubDataArray,
  sortDirection: 'asc',
  search: mockFilterLogic,
  sort: (data, fieldName = 'firstName', direction = 'asc') => {
    return mockSortLogic(data, fieldName, direction);
  }
};

const ajaxDsOptions = {
  size: 10,
  ajax: async function() {
    return await mockAjaxCall(this, stubDataArray);
  }
};

storiesOf('Array Datasource', module)
  .add('Minimal Table', () => ({
    components: { MinimalTable },
    data() {
      let datasource = new ArrayDatasource(arrayDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<MinimalTable :datasource="datasource"></MinimalTable>'
  })).add('Simple Table', () => ({
    components: { SimpleTable },
    data() {
      let datasource = new ArrayDatasource(arrayDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<SimpleTable :datasource="datasource"></SimpleTable>'
  })).add('Multi-Column Sort & Filtering Table', () => ({
    components: { MultiColumnSortingAndFilteringTable },
    data() {
      let datasource = new ArrayDatasource(arrayDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<MultiColumnSortingAndFilteringTable :datasource="datasource"></MultiColumnSortingAndFilteringTable>'
  }));

storiesOf('Ajax Datasource', module)
  .add('Minimal Table', () => ({
    components: { MinimalTable },
    data() {
      let datasource = new AjaxDatasource(ajaxDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<MinimalTable :datasource="datasource"></MinimalTable>'
  })).add('Simple Table', () => ({
    components: { SimpleTable },
    data() {
      let datasource = new AjaxDatasource(ajaxDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<SimpleTable :datasource="datasource"></SimpleTable>'
  })).add('Multi-Column Sort & Filtering Table', () => ({
    components: { MultiColumnSortingAndFilteringTable },
    data() {
      let datasource = new AjaxDatasource(ajaxDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<MultiColumnSortingAndFilteringTable :datasource="datasource"></MultiColumnSortingAndFilteringTable>'
  }));