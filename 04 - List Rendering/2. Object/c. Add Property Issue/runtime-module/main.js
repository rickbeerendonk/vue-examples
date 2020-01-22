/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

let itemId = 4;

new Vue({
  el: '#app',
  data: {
    obj: {
      prop1: true,
      prop2: 'two',
      prop3: 3
    }
  },
  methods: {
    addRight() {
      this.$set(this.obj, `prop ${itemId}`, itemId++);
    },
    addWrong() {
      this.obj[itemId] = itemId++;
    }
  }
});
