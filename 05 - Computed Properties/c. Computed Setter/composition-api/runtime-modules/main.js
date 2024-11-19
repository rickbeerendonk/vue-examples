/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp, ref, computed } from 'vue';

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
