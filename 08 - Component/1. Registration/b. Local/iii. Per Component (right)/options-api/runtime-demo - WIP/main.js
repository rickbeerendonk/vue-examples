/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue/dist/vue.esm-browser.js';

(async () => {
  /* global httpVueLoader */
  const Top = await httpVueLoader('./Top.vue')();

  // Bootstrap
  Vue.createApp({
    // Register component locally
    components: {
      Top
    }
  }).mount('#app');
})();
