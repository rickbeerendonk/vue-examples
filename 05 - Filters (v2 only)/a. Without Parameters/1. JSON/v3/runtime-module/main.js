/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  // Use a method instead of a filter
  methods: {
    json(value) {
      return JSON.stringify(value);
    }
  },
  data() {
    return {
      person: {
        name: 'Jan Jansen',
        dob: new Date(1951, 11, 24),
        retired: true,
        children: 3
      }
    };
  }
}).mount('#app');
