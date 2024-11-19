/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      fontSize: 48,
      fontStyle: 'italic',
      textDecoration: 'underline'
    };
  }
}).mount('#app');