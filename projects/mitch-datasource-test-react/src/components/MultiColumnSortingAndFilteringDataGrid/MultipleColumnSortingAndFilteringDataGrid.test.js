import React from 'react';
import ReactDOM from 'react-dom';
import MultipleColumnSortingAndFilteringDataGrid from './MultipleColumnSortingAndFilteringDataGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultipleColumnSortingAndFilteringDataGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
