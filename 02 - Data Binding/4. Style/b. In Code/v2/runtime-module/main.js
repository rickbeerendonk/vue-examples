/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
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
  }
});
