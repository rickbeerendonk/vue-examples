/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import MyComponent from './MyComponent.js';

// Bootstrap
const app = Vue.createApp({
  components: {
    MyComponent
  }
});
app.mount('#app');
