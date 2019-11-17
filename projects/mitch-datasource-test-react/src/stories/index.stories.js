/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleTable from '../components/SimpleTable/SimpleTable';
import MultiColumnSortingAndFilteringTable from '../components/MultiColumnSortingAndFilteringTable/MultipleColumnSortingAndFilteringTable';
import { ArrayDatasource, AjaxDatasource } from 'mitch-datasource';
import {
  stubDataArray,
  mockAjaxCall,
  mockFilterLogic,
  mockSortLogic
} from 'mitch-datasource-test-utilities';
import MinimalTable from '../components/MinimalTable/MinimalTable';

const arrayDsOptions = {
  data: stubDataArray,
  sortDirection: 'asc',
  search: mockFilterLogic,
  sort: (data, fieldName = 'firstName', direction = 'asc') => {
    return mockSortLogic(data, fieldName, direction);
  }
};

const ajaxDsOptions = {
  ajax: async function() {
    return await mockAjaxCall(this, stubDataArray);
  }
};

storiesOf('Array Datasource', module)
  .add('Minimal Table', () => {
    let datasource = new ArrayDatasource(arrayDsOptions);
    datasource.update();
    return <MinimalTable datasource={ datasource } />;
  }).add('Simple Table', () => {
    let datasource = new ArrayDatasource(arrayDsOptions);
    datasource.update();
    return <SimpleTable datasource={ datasource } />;
  }).add('Multi-Column Sort & Filtering Table', () => {
    let datasource = new ArrayDatasource(arrayDsOptions);
    datasource.update();
    return <MultiColumnSortingAndFilteringTable datasource={ datasource } />;
  });

storiesOf('Ajax Datasource', module)
  .add('Minimal Table', () => {
    let datasource = new AjaxDatasource(ajaxDsOptions);
    datasource.update();
    return <MinimalTable datasource={ datasource } />;
  }).add('Simple Data Grid', () => {
    let datasource = new AjaxDatasource(ajaxDsOptions);
    datasource.update();
    return <SimpleTable datasource={ datasource } />;
  }).add('Multi-Column Sort & Filtering Data Grid', () => {
    let datasource = new AjaxDatasource(ajaxDsOptions);
    datasource.update();
    return <MultiColumnSortingAndFilteringTable datasource={ datasource } />;
  });