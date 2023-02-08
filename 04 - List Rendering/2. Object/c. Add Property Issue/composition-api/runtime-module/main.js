/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref
} from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

let itemId = 4;

createApp({
  setup() {
    const obj = ref({
      prop1: true,
      prop2: 'two',
      prop3: 3
    });
    const add1 = () => {
      // WRONG in Vue 3 Composition API, was right in Vue 2, because:
      // - this is not available in setup
      // - this.set() exists, but there is no standalone set function
      // set(this.obj, `prop${itemId}`, itemId++);
    };
    const add2 = () => {
      // RIGHT in Vue 3, was wrong in Vue 2,
      // because it uses Proxies (this here is a Proxy):
      //console.log(this);

      obj.value[`prop${itemId}`] = itemId++;
    };

    return { obj, add1, add2 };
  }
}).mount('#app');
