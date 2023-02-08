/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
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
