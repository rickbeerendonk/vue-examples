/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

const app = Vue.createApp({
  el: '#app'
});

app.directive('focus', {
  mounted(elem) {
    elem.focus();
  }
});

app.mount('#app');
