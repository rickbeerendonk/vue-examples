/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

/* global httpVueLoader */
const App = httpVueLoader('./App.vue');

// Bootstrap
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<app />'
});
