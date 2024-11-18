/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      classDynamic1: 'dynamic1',
      classDynamic2: 'dynamic2'
    };
  },
  methods: {
    clicked() {
      this.classDynamic1 = this.classDynamic1 ? '' : 'dynamic1';
      this.classDynamic2 = this.classDynamic2 ? '' : 'dynamic2';
    }
  }
}).mount('#app');
