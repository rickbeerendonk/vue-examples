import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

// Import your custom component.
import GreetingEditor from './GreetingEditor';

// Register custom component.
Vue.component('GreetingEditor', GreetingEditor);

storiesOf('Containers/GreetingEditor/01 - JS Basic', module).add(
  'Default',
  () => '<GreetingEditor />'
);
