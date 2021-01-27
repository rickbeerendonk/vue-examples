/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

const app = Vue.createApp({
  el: '#app'
});

app.directive('hidden', {
  mounted(elem, binding) {
    elem.style.visibility = binding.value ? 'hidden' : 'visible';
  },
  updated(elem, binding) {
    elem.style.visibility = binding.value ? 'hidden' : 'visible';
  }
});

app.mount('#app');
