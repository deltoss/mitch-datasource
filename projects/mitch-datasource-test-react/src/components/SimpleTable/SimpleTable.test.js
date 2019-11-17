import React from 'react';
import ReactDOM from 'react-dom';
import SimpleTable from './SimpleTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
