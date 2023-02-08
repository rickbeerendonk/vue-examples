/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref
} from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

let itemId = 4;

createApp({
  setup() {
    const items = ref(['one', 'two', 'three']);

    const overwrite1 = () => {
      // WRONG in Vue 3 Composition API, was right in Vue 2, because:
      // - this is not available in setup
      // - this.set() exists, but there is no standalone set function
      // set(this.items, 0, itemId++);
    };
    const overwrite2 = () => {
      items.value.splice(0, 1, itemId++);
    };
    const overwrite3 = () => {
      const [, ...rest] = items.value;
      items.value = [itemId++, ...rest];
    };
    const overwrite4 = () => {
      // RIGHT in Vue 3, was wrong in Vue 2,
      // because it uses Proxies (this here is a Proxy):
      //console.log(this);

      items.value[0] = itemId++;
    };

    return { items, overwrite1, overwrite2, overwrite3, overwrite4 };
  }
}).mount('#app');
