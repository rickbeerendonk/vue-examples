/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

createApp({
  setup() {
    const clickParams = ref(null);
    const count = ref(0);

    const clicked = (...args) => {
      // debugger;
      clickParams.value = args;
      count.value++;
    };

    return { clickParams, count, clicked };
  }
}).mount('#app');
