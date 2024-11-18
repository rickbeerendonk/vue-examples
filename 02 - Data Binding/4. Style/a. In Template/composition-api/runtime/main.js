/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from 'vue';

createApp({
  setup() {
    return {
      fontSize: 48,
      fontStyle: 'italic',
      textDecoration: 'underline'
    };
  }
}).mount('#app');
