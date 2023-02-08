/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      object: {
        prop2: 'two',
        prop3: 3,
        prop1: true
      }
    };
  }
}).mount('#app');
