/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';

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
