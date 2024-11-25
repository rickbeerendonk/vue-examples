/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';

Vue.createApp({
  data() {
    return {
      greeting: 'Hello Vue!'
    };
  },
  template: `<span v-text="greeting"></span>` // v-text directive
}).mount('#app');
