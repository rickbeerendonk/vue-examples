/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref
} from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

createApp({
  data() {
    const name = ref('');

    return {
      name
    };
  }
}).mount('#app');
