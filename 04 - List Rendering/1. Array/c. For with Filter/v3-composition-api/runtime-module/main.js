/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  createApp,
  ref
} from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

createApp({
  setup() {
    const items = ref(['one', 'two', 'three', 'four', 'five', 'six']);
    const short = (arr, itemLength = 3) =>
      arr.filter(val => val.length <= itemLength);

    return { items, short };
  }
}).mount('#app');
