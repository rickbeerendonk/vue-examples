/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from 'vue';

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
