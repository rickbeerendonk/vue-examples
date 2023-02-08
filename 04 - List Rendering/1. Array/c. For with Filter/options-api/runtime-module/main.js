/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
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
}).mount('#app');
