/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      option1: 'Hello',
      option2: 'Bye',
      selected: ''
    };
  }
});
app.mount('#app');
