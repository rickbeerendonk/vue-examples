/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';

const app = createApp({
  setup() {
    // No reactive state needed for this example
  }
});

app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});

app.mount('#app');
