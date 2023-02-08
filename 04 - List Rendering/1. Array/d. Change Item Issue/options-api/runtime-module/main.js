/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

let itemId = 4;

Vue.createApp({
  data() {
    return { items: ['one', 'two', 'three'] };
  },
  methods: {
    overwrite1() {
      // WRONG in Vue 3, was right in Vue 2,
      // because it uses Proxies (this here is a Proxy):
      //console.log(this);

      this.set(this.items, 0, itemId++);
    },
    overwrite2() {
      this.items.splice(0, 1, itemId++);
    },
    overwrite3() {
      const [, ...rest] = this.items;
      this.items = [itemId++, ...rest];
    },
    overwrite4() {
      // RIGHT in Vue 3, was wrong in Vue 2,
      // because it uses Proxies (this here is a Proxy):
      //console.log(this);

      this.items[0] = itemId++;
    }
  }
}).mount('#app');
