/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      checked: ''
    };
  }
});
const vm = app.mount('#app');

vm.a = 'AAA';
vm.b = 'BBB';
vm.c = 'CCC';
