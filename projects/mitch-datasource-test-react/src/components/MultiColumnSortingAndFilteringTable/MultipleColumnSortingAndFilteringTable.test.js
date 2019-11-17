import React from 'react';
import ReactDOM from 'react-dom';
import MultipleColumnSortingAndFilteringTable from './MultipleColumnSortingAndFilteringTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultipleColumnSortingAndFilteringTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
