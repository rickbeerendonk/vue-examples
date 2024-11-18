/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from 'vue';

Vue.createApp({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    clicked() {
      this.count++;
    }
  }
}).mount('#app');
