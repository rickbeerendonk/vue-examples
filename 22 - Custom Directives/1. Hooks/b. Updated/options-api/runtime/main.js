/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      show: false
    };
  }
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
