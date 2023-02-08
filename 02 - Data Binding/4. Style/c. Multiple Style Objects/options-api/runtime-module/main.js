/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      style1: {
        color: 'blue',
        fontStyle: 'italic'
      },
      style2: {
        color: 'red',
        textDecoration: 'underline'
      }
    };
  }
}).mount('#app');
