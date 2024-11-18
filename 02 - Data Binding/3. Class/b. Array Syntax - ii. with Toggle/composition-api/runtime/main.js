/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

createApp({
  setup() {
    const isDynamic = ref(false);
    function clicked() {
      isDynamic.value = !isDynamic.value;
    }

    return { isDynamic, clicked };
  }
}).mount('#app');
