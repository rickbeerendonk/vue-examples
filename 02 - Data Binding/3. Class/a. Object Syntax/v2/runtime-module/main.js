/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
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
});
