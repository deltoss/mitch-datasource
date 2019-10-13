import { configure, addDecorator } from '@storybook/vue';

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Add global decorators for plugins
// Adjust the context around the story, i.e. to adjust the visuals
addDecorator(() => ({
  template: '<div style="padding: 3em"><story/></div>',
}));

configure(loadStories, module);