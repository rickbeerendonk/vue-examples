/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import App from './App.js';

const app = Vue.createApp({
  components: {
    App
  },
  render: h => h(App)
});
app.mount('#app');
