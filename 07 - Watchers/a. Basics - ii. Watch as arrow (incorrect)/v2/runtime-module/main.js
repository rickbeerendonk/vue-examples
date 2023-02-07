/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
    return {
      count: 0,
      change: ''
    };
  },
  watch: {
    count: (newValue, oldValue) => {
      // Arrow, so this is not available:
      this.change = `Changed from ${oldValue} to ${newValue}`;
    }
  }
});
