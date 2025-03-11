/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from 'vue';

import ComponentWithFragment from './ComponentWithFragment.js';
import ComponentWithOneRoot from './ComponentWithOneRoot.js';

const app = createApp({
  components: {
    ComponentWithFragment,
    ComponentWithOneRoot
  },
  data() {
    return {
      show: false
    };
  }
});

// Use function only when:
// - Same behavior for mounted and updated hooks
// - No other hooks needed
app.directive('hidden', (elem, binding) => {
  elem.style.visibility = binding.value ? 'hidden' : 'visible';
});

app.mount('#app');
