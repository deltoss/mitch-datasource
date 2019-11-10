import { configure, addDecorator } from '@storybook/react';
import React from 'react';

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Add global decorators for plugins
// Adjust the context around the story, i.e. to adjust the visuals
addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)

configure(loadStories, module);