/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref,
  watch
} from '../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    const count = ref(0);
    const change = ref('');
    watch(
      count,
      (newValue, oldValue) => {
        change.value = `Changed from ${oldValue} to ${newValue}`;
      },
      {
        immediate: true // Force on initialisation
      }
    );

    return { count, change };
  }
}).mount('#app');
