/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data() {
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
});
