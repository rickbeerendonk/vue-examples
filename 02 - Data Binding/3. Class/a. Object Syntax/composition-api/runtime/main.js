/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

createApp({
  setup() {
    const isDynamic1 = ref(false);
    const isDynamic2 = ref(true);
    function clicked() {
      isDynamic1.value = !isDynamic1.value;
      isDynamic2.value = !isDynamic2.value;
    }

    return { isDynamic1, isDynamic2, clicked };
  }
}).mount('#app');
