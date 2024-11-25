/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from 'vue';

createApp({
  setup() {
    // Define component data
    const greeting = 'Hello Vue!';

    return { greeting };
  }
}).mount('#app');
