/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue/dist/vue.esm-browser.js';

import GreetingComponent from './GreetingComponent.js';

// Bootstrap
const app = Vue.createApp({
  // Register component locally
  components: {
    GreetingComponent
  }
});

app.mount('#app');
