import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

// Import your custom component.
import GreetingEditor from './GreetingEditor';

// Register custom component.
Vue.component('GreetingEditor', GreetingEditor);

storiesOf('Containers/GreetingEditor', module).add(
  'Default',
  () => '<GreetingEditor />'
);
