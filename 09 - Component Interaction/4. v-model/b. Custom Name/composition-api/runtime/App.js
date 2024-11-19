/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { ref } from 'vue';

import Child from './Child.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    const greetingText = ref('World');
    return { greetingText };
  },
  template: `
    <child v-model:custom-name="greetingText" />
    <h1>Hello {{ greetingText }}</h1>
    
    <hr />
    <child
      v-bind:custom-name="greetingText"
      v-on:['update:custom-name']="greetingText = $event" />
  `
};
