/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue/dist/vue.esm-browser.js';

import Top from './Top.js';

// Bootstrap
Vue.createApp({
  // Register component locally
  components: {
    Top
  }
}).mount('#app');
