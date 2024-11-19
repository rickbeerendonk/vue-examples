/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from 'vue';

createApp({
  setup() {
    return {
      object: {
        prop2: 'two',
        prop3: 3,
        prop1: true
      }
    };
  }
}).mount('#app');
