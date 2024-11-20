/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue/dist/vue.esm-browser.js';

import ContainerComponent from './ContainerComponent.js';

// Bootstrap
const app = Vue.createApp({
  components: {
    ContainerComponent
  }
});
app.mount('#app');
