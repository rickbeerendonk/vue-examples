/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      result: []
    };
  },
  methods: {
    mousedown(event) {
      this.result.push(
        `button: ${event.button}, (ctrlKey: ${event.ctrlKey}, shiftKey  ${event.shiftKey}, altKey: ${event.altKey}, metaKey: ${event.metaKey})`
      );
    }
  }
});
app.mount('#app');
