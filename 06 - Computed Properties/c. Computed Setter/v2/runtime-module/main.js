/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    items: ['one', 'two', 'three']
  },
  computed: {
    csv: {
      get() {
        return this.items.join();
      },
      set(value) {
        this.items = value.split(',');
      }
    }
  }
});
