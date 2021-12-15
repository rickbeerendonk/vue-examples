/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      isDynamic1: false,
      isDynamic2: true
    };
  },
  methods: {
    clicked() {
      this.isDynamic1 = !this.isDynamic1;
      this.isDynamic2 = !this.isDynamic2;
    }
  }
}).mount('#app');
