/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

const vm = new Vue({
  el: '#app',
  data() {
    return {
      checked: ''
    };
  }
});

vm.a = 'AAA';
vm.b = 'BBB';
vm.c = 'CCC';
