/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue/dist/vue.esm-browser.js';

import GreetingComponent from './GreetingComponent.js';

// Bootstrap
const app = Vue.createApp({
  name: 'App',
  components: {
    GreetingComponent
  },
  data() {
    return {
      count: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 50);
  }
});

// Enable component init, compile, render and patch performance tracing.
app.config.performance = true;

app.mount('#app');
