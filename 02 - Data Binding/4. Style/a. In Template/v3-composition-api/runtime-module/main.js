/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

createApp({
  setup() {
    return {
      fontSize: 48,
      fontStyle: 'italic',
      textDecoration: 'underline'
    };
  }
}).mount('#app');
