/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      count: 0,
      change: ''
    };
  },
  watch: {
    count(newValue, oldValue) {
      this.change = `Changed from ${oldValue} to ${newValue}`;
    }
  }
}).mount('#app');
