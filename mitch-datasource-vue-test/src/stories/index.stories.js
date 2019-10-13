/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { Repeater } from 'vue-custom-repeater';

storiesOf('Repeater', module)
  .add('Basic Use', () => ({
    components: { Repeater },
    template: '<repeater></repeater>',
  }));
