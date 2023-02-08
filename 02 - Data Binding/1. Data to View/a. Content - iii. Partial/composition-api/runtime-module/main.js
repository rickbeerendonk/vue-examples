/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    // Return data available for rest of the component
    return { greeting: 'Hello World!' };
  }
}).mount('#app');
