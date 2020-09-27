/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    clicked() {
      this.count++;
    }
  }
}).mount('#app');
