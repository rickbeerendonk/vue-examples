/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

(async () => {
  /* global httpVueLoader */
  const GreetingComponent = await httpVueLoader('./GreetingComponent.vue')();
  const OtherComponent = await httpVueLoader('./OtherComponent.vue')();

  const app = Vue.createApp({});

  // Register component globally
  app.component('greeting-component', GreetingComponent);
  app.component('other-component', OtherComponent);

  app.mount('#app');
})();
