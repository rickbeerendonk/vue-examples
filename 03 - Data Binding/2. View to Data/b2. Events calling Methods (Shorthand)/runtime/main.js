/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  methods: {
    clicked: function(e) {
      alert(`Event handled.
      Target: ${e.target}
      Value: ${e.target.value}`);
    }
  }
});
