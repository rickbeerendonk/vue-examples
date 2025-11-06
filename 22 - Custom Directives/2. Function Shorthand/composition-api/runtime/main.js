/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const show = ref(false);
    return { show };
  }
});

// Use function only when:
// - Same behavior for mounted and updated hooks
// - No other hooks needed
app.directive('hidden', (elem, binding) => {
  elem.style.visibility = binding.value ? 'hidden' : 'visible';
});

app.mount('#app');
