/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

let itemId = 4;

new Vue({
  el: '#app',
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
      this.$set(this.obj, `prop${itemId}`, itemId++);
    },
    add2() {
      this.obj[`prop${itemId}`] = itemId++;
    }
  }
});
