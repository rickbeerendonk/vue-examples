/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from 'vue';

// Enable component init, compile, render and patch performance tracing.
Vue.config.performance = true;

new Vue({
  el: '#app',
  data() {
    return {
      greeting: 'Hello World!'
    };
  }
});
