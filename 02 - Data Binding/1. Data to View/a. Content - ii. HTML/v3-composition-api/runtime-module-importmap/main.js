/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from 'vue';

createApp({
  setup() {
    // Return data available for rest of the component
    return { greeting: 'Hello <i>World</i>!' };
  }
}).mount('#app');
