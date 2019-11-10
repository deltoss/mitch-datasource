import React from 'react';
import ReactDOM from 'react-dom';
import SimpleDataGrid from './SimpleDataGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleDataGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
