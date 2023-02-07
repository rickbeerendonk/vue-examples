/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Child from './Child.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'App',
  components: {
    Child
  },
  data() {
    return {
      greetingText: 'World'
    };
  },
  // Short for:
  //  <child
  //    v-bind:value="greetingText"
  //    v-on:input="greetingText = $event">
  //  </child>
  template: `
    <div>
      <Child v-model="greetingText" />
      <h1>Hello {{ greetingText }}</h1>
    </div>
  `
};
