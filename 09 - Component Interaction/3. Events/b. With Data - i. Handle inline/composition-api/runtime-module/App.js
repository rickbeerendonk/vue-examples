/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { ref } from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

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
    <child :name="greetingText" @change="greetingText = $event"></Child>
    <h1>Hello {{ greetingText }}</h1>
  `
};
