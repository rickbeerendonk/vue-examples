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
    const greetingChanged = value => {
      greetingText.value = value;
    };

    return { greetingText, greetingChanged };
  },
  template: `
    <child :name="greetingText" @change="greetingChanged"></Child>
    <h1>Hello {{ greetingText }}</h1>
  `
};
