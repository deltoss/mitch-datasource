/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleDataGrid from '../components/SimpleDataGrid/SimpleDataGrid';
import MultiColumnSortingAndFilteringDataGrid from '../components/MultiColumnSortingAndFilteringDataGrid/MultipleColumnSortingAndFilteringDataGrid';
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
  .add('Simple Data Grid', () => {
    let datasource = new ArrayDatasource(arrayDsOptions);
    datasource.update();
    return <SimpleDataGrid datasource={ datasource } />;
  }).add('Multi-Column Sort & Filtering Data Grid', () => {
    let datasource = new ArrayDatasource(arrayDsOptions);
    datasource.update();
    return <MultiColumnSortingAndFilteringDataGrid datasource={ datasource } />;
  });

storiesOf('Ajax Datasource', module)
  .add('Simple Data Grid', () => {
    let datasource = new AjaxDatasource(ajaxDsOptions);
    datasource.update();
    return <SimpleDataGrid datasource={ datasource } />;
  }).add('Multi-Column Sort & Filtering Data Grid', () => {
    let datasource = new AjaxDatasource(ajaxDsOptions);
    datasource.update();
    return <MultiColumnSortingAndFilteringDataGrid datasource={ datasource } />;
  });