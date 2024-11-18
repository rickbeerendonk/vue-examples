/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      isDynamic: false
    };
  },
  methods: {
    clicked() {
      this.isDynamic = !this.isDynamic;
    }
  }
}).mount('#app');
