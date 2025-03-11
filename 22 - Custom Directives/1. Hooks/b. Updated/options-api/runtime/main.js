/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from 'vue';

const app = createApp({
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
