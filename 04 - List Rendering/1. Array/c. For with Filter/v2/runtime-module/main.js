/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
    return {
      items: ['one', 'two', 'three', 'four', 'five', 'six']
    };
  },
  methods: {
    short(arr, itemLength = 3) {
      return arr.filter(val => val.length <= itemLength);
    }
  }
});
