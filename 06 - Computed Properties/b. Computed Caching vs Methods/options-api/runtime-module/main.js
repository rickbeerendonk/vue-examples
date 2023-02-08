/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      count1: 0,
      count2: 0
    };
  },
  computed: {
    computedCount1() {
      return Date.now() + this.count1 - this.count1;
    }
  },
  methods: {
    methodCount1() {
      return Date.now() + this.count1 - this.count1;
    }
  }
}).mount('#app');
