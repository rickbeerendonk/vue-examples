/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue/dist/vue.esm-browser.js';

import App from './App.js';

// Bootstrap
const app = Vue.createApp({
  components: {
    App
  }
});
app.mount('#app');
