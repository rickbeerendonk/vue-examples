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
      count: 0
    };
  },
  methods: {
    childChanged() {
      this.count++;
    }
  },
  template: `
    <child @updated="childChanged" />
    <h1>Clicked: {{ count }}</h1>
  `
};
