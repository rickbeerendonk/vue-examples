/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      // camelCase
      styleCamel: {
        fontSize: '48px',
        fontStyle: 'italic',
        textDecoration: 'underline'
      },
      // kebab-case
      styleKebab: {
        'font-size': '48px',
        'font-style': 'italic',
        'text-decoration': 'underline'
      }
    };
  }
}).mount('#app');
