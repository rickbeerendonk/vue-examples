/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref
} from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    const first = ref(true);
    return {
      first
    };
  }
}).mount('#app');
