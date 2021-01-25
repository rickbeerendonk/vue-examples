/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      date: new Date()
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    }
  }
});
app.mount('#app');
