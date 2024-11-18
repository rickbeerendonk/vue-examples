/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref
} from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    const isDynamic = ref(false);
    function clicked() {
      isDynamic.value = !isDynamic.value;
    }

    return { isDynamic, clicked };
  }
}).mount('#app');
