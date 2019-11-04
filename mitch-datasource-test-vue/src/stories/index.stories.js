/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import SimpleDataGrid from '../components/SimpleDataGrid';
import MultiColumnSortingAndFilteringDataGrid from '../components/MultiColumnSortingAndFilteringDataGrid';
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
  .add('Simple Data Grid', () => ({
    components: { SimpleDataGrid },
    data() {
      let datasource = new ArrayDatasource(arrayDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<SimpleDataGrid :datasource="datasource"></SimpleDataGrid>'
  })).add('Multi-Column Sort & Filtering Data Grid', () => ({
    components: { MultiColumnSortingAndFilteringDataGrid },
    data() {
      let datasource = new ArrayDatasource(arrayDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<MultiColumnSortingAndFilteringDataGrid :datasource="datasource"></MultiColumnSortingAndFilteringDataGrid>'
  }));

storiesOf('Ajax Datasource', module)
  .add('Simple Data Grid', () => ({
    components: { SimpleDataGrid },
    data() {
      let datasource = new AjaxDatasource(ajaxDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<SimpleDataGrid :datasource="datasource"></SimpleDataGrid>'
  })).add('Multi-Column Sort & Filtering Data Grid', () => ({
    components: { MultiColumnSortingAndFilteringDataGrid },
    data() {
      let datasource = new AjaxDatasource(ajaxDsOptions);
      datasource.update();
      return {
        datasource: datasource
      }
    },
    template: '<MultiColumnSortingAndFilteringDataGrid :datasource="datasource"></MultiColumnSortingAndFilteringDataGrid>'
  }));