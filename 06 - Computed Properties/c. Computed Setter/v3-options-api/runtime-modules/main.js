/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      items: ['one', 'two', 'three']
    };
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
}).mount('#app');
