/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  filters: {
    json(value) {
      return JSON.stringify(value);
    }
  },
  data() {
    return {
      person: {
        name: 'Jan Jansen',
        dob: new Date(1951, 11, 24),
        retired: true,
        children: 3
      }
    };
  }
});
