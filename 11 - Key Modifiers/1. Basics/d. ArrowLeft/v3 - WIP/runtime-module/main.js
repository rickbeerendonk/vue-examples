/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data: {
    result: []
  },
  methods: {
    keyup: function (event) {
      this.result.push(
        `key: ${event.key}, code: ${event.code} (ctrlKey: ${event.ctrlKey}, shiftKey  ${event.shiftKey}, altKey: ${event.altKey}, metaKey: ${event.metaKey})`
      );
    }
  }
});
app.mount('#app');
