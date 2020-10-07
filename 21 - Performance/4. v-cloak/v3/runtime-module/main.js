/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      greeting: 'Hello World!'
    };
  }
});

// Enable component init, compile, render and patch performance tracing.
app.config.performance = true;

app.mount('#app');
