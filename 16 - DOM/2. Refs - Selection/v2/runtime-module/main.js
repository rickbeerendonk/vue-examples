/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    name: 'World'
  },
  mounted() {
    // Use $refs to get direct DOM access
    //this.$refs.input.focus();
    this.$refs.input.select();
  },
  methods: {
    changed(e) {
      this.name = e.target.value;
    }
  }
});
