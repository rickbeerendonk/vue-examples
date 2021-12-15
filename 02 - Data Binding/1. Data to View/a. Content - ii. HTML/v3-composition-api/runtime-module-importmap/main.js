/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

createApp({
  setup() {
    const greeting = ref('Hello <i>World</i>!');

    return { greeting };
  }
}).mount('#app');
