/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue/dist/vue.esm-browser.js';

import Greeting from './Greeting.js';

const app = Vue.createApp({
  components: {
    Greeting
  },
  template: '<Greeting />'
});
app.mount('#app');
