/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

// Enable component init, compile, render and patch performance tracing.
Vue.config.performance = true;

new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!'
  }
});
