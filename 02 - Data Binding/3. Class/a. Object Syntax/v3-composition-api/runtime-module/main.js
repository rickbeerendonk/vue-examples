/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref
} from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

createApp({
  setup() {
    const isDynamic1 = ref(false);
    const isDynamic2 = ref(true);
    const clicked = () => {
      isDynamic1.value = !isDynamic1.value;
      isDynamic2.value = !isDynamic2.value;
    };

    return { isDynamic1, isDynamic2, clicked };
  }
}).mount('#app');
