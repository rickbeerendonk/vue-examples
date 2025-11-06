/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const show = ref(false);
    return { show };
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
