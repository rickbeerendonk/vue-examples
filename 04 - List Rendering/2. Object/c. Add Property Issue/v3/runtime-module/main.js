/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

let itemId = 4;

Vue.createApp({
  data() {
    return {
      obj: {
        prop1: true,
        prop2: 'two',
        prop3: 3
      }
    };
  },
  methods: {
    add1() {
      // WRONG in Vue 3, was right in Vue 2,
      // because it uses Proxies (this here is a Proxy):
      //console.log(this);

      this.set(this.obj, `prop ${itemId}`, itemId++);
    },
    add2() {
      // RIGHT in Vue 3, was wrong in Vue 2,
      // because it uses Proxies (this here is a Proxy):
      //console.log(this);

      this.obj[`prop ${itemId}`] = itemId++;
    }
  }
}).mount('#app');
