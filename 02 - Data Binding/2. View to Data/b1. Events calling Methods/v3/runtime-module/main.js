/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  methods: {
    clicked(e) {
      alert(`Event handled.
      Target: ${e.target}`);
    }
  }
}).mount('#app');
