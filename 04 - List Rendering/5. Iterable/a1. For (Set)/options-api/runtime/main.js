/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';

createApp({
  data() {
    return {
      items: new Set(['one', 'two', 'three'])
    };
  }
}).mount('#app');
