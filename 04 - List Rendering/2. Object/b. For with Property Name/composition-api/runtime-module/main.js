/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    return {
      object: {
        prop2: 'two',
        prop3: 3,
        prop1: true
      }
    };
  }
}).mount('#app');
