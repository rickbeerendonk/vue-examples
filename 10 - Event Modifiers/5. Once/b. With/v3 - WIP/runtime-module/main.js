/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data: {
    count: 0 // Will NOT become more than 1
  }
});
app.mount('#app');
