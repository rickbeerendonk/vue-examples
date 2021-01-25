/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

const app = Vue.createApp({
  methods: {
    changed(e) {
      // Use $refs to get direct DOM access
      this.$refs.result.innerText = `Hello ${e.target.value}!`;
    }
  }
});
app.mount('#app');
