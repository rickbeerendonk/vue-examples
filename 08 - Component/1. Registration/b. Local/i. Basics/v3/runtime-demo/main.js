/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

(async () => {
  /* global httpVueLoader */
  const GreetingComponent = await httpVueLoader('./GreetingComponent.vue')();

  // Bootstrap
  const app = Vue.createApp({});
  app.component('greeting-component', GreetingComponent);
  app.mount('#app');
})();
