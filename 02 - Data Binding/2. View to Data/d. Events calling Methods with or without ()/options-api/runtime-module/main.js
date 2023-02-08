/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      clickParams: null,
      count: 0
    };
  },
  methods: {
    clicked(...args) {
      // debugger;
      this.clickParams = args;
      this.count++;
    }
  }
}).mount('#app');
