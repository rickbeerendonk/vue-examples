/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      dynamicevent: 'click'
    };
  },
  methods: {
    clicked(e) {
      alert(`Event handled.
      Target: ${e.target}`);
    }
  }
}).mount('#app');
