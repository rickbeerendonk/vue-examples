/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
    return {
      name: 'World'
    };
  },
  mounted() {
    // Use $refs to get direct DOM access
    this.$refs.input.focus();
  },
  methods: {
    changed(e) {
      this.name = e.target.value;
    }
  }
});
