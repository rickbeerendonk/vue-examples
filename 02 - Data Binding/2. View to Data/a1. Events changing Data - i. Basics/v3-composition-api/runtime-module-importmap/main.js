/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

createApp({
  setup() {
    const count = ref(0);

    //console.log(count);
    //console.log(count.value);

    return {
      count
    };
  }
}).mount('#app');
