/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      firstName: 'Evan',
      lastName: 'You',
      fullNameViaWatch: ''
    };
  },
  computed: {
    fullNameViaComputed() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  watch: {
    firstName(value) {
      this.fullNameViaWatch = `${value} ${this.lastName}`;
    },
    lastName(value) {
      this.fullNameViaWatch = `${this.firstName} ${value}`;
    }
  }
}).mount('#app');
