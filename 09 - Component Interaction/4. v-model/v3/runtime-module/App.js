/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Child from './Child.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'App',
  components: {
    Child
  },
  data: function () {
    return {
      greetingText: 'World'
    };
  },
  // Short for:
  //  <child
  //    v-bind:modelValue="greetingText"
  //    v-on:['update:modelValue']="greetingText = $event" />
  template: `
    <div>
      <child v-model="greetingText" />
      <h1>Hello {{ greetingText }}</h1>
      
      <hr />
      <child
        v-bind:modelValue="greetingText"
        v-on:['update:modelValue']="greetingText = $event" />
    </div>
  `
};
