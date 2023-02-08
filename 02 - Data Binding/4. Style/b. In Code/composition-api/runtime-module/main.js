/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

createApp({
  setup() {
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
