/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      count: 0,
      change: ''
    };
  },
  watch: {
    count(newValue, oldValue) {
      // Useful for asynchronous or expensive operations in response to data changes.
      // Note: watch() can have side effects, but avoid them in computed().
      setTimeout(() => {
        this.change = `Changed from ${oldValue} to ${newValue}`;
      }, 2000);
    }
  }
}).mount('#app');
