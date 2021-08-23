/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  // Use a method instead of a filter
  methods: {
    reverse(value) {
      if (!value) {
        return '';
      }

      return value.split('').reverse().join('');
    },
    titlecase(value) {
      if (!value) {
        return '';
      }

      return value
        .split(' ')
        .map(([first, ...rest]) =>
          [first.toUpperCase(), ...rest.join('').toLowerCase()].join('')
        )
        .join(' ');
    }
  }
}).mount('#app');
