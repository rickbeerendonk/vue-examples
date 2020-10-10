import Vue from 'vue';
//import { storiesOf } from '@storybook/vue';

// Import your custom component.
import Greeting from './Greeting';

// Register custom component.
Vue.component('Greeting', Greeting);

// Button.stories.js

// We create a “template” of how args map to rendering
const Template = args => <Greeting {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { name: 'Vue' };
