/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from 'vue';

createApp({
  setup() {
    return {
      items: new Set(['one', 'two', 'three'])
    };
  }
}).mount('#app');
