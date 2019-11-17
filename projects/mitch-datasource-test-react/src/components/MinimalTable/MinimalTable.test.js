import React from 'react';
import ReactDOM from 'react-dom';
import MinimalTable from './MinimalTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MinimalTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
