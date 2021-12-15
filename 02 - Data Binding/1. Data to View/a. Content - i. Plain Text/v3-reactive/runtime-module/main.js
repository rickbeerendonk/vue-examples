/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  createApp,
  ref
} from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

createApp({
  setup() {
    const greeting = ref('Hello World!');

    return { greeting };
  }
}).mount('#app');
