/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

createApp({
  setup() {
    const greeting = ref('Hello World!');

    return { greeting };
  }
}).mount('#app');
