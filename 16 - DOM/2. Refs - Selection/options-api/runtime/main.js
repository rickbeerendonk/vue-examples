/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      name: 'World'
    };
  },
  mounted() {
    // Use $refs to get direct DOM access
    this.$refs.input.select();
  },
  methods: {
    changed(e) {
      this.name = e.target.value;
    }
  }
});
app.mount('#app');
