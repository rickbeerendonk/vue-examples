/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

createApp({
  setup() {
    const items = ref(['one', 'two', 'three', 'four', 'five', 'six']);
    const short = (arr, maxItemLength = 3) =>
      arr.filter(val => val.length <= maxItemLength);

    return { items, short };
  }
}).mount('#app');
