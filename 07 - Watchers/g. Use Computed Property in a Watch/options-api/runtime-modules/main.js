/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      count: 0,
      change: ''
    };
  },
  computed: {
    countText() {
      if (this.count < 3) {
        return 'low';
      }
      if (this.count < 10) {
        return 'normal';
      }
      return 'high';
    }
  },
  watch: {
    count(newValue) {
      this.change = `Changed to ${newValue} (${this.countText})`;
    }
  }
}).mount('#app');
