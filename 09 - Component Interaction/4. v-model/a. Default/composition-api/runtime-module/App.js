/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { ref } from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

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
  // Short for:
  //  <child
  //    v-bind:modelValue="greetingText"
  //    v-on:['update:modelValue']="greetingText = $event" />
  template: `
    <child v-model="greetingText" />
    <h1>Hello {{ greetingText }}</h1>
    
    <hr />
    <child
      v-bind:modelValue="greetingText"
      v-on:update:modelValue="greetingText = $event" />
  `
};
