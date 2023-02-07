/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
    return {
      count: 0,
      change: ''
    };
  },
  watch: {
    count(newValue, oldValue) {
      this.change = `Changed from ${oldValue} to ${newValue}`;
    },
    change() {
      /*
      [Vue warn]: Maximum recursive updates exceeded. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.
      */
      this.count++;
    }
  }
});
