/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import GreetingComponent from './GreetingComponent.js';

// Enable component init, compile, render and patch performance tracing.
Vue.config.performance = true;

// Bootstrap
const app = Vue.createApp({
  name: 'App',
  components: {
    GreetingComponent
  },
  data: {
    count: 0
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 50);
  }
});
app.mount('#app');
