/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

let itemId = 4;

createApp({
  setup() {
    const items = ref(['one', 'two', 'three']);
    const insertTop = () => {
      items.value.splice(0, 0, itemId++);
    };

    return { items, insertTop };
  }
}).mount('#app');
