/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

createApp({
  setup() {
    const first = ref(true);
    return {
      first
    };
  }
}).mount('#app');
