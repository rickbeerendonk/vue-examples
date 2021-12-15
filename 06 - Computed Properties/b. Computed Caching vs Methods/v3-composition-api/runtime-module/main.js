/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref,
  computed
} from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

createApp({
  setup() {
    const count1 = ref(0);
    const count2 = ref(0);
    const computedCount1 = computed(
      () => Date.now() + count1.value - count1.value
    );
    const funcCount1 = () => Date.now() + count1.value - count1.value;

    return { count1, count2, computedCount1, funcCount1 };
  }
}).mount('#app');
