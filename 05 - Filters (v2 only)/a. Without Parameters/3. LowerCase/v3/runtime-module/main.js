/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  // Use a method instead of a filter
  methods: {
    lowercase(value) {
      if (!value) {
        return '';
      }

      return value.toLowerCase();
    }
  }
}).mount('#app');
