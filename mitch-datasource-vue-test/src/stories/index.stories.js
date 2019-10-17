/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import SimpleDataGrid from '../components/SimpleDataGrid';
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
  sort: (data, fieldName, direction) => {
    fieldName = fieldName || "firstName"; // Defaults to sorting by first name
    direction = direction || "asc"; // Defaults to sorting by ascending order
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
      return {
        datasource: datasource
      }
    },
    template: '<SimpleDataGrid :datasource="datasource"></SimpleDataGrid>'
  }));

storiesOf('Ajax Datasource', module)
  .add('Simple Data Grid', () => ({
    components: { SimpleDataGrid },
    data() {
      let datasource = new AjaxDatasource(ajaxDsOptions);
      return {
        datasource: datasource
      }
    },
    template: '<SimpleDataGrid :datasource="datasource"></SimpleDataGrid>'
  }));