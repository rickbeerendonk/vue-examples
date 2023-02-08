/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref,
  computed
} from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

createApp({
  setup() {
    const items = ref(['one', 'two', 'three']);
    const csv = computed({
      get() {
        return items.value.join();
      },
      set(value) {
        items.value = value.split(',');
      }
    });

    return { items, csv };
  }
}).mount('#app');
