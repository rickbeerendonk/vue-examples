/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

(async () => {
  /* global httpVueLoader */
  const Greeting = await httpVueLoader('./Greeting.vue')();
  const GreetingFC = await httpVueLoader('./GreetingFC.vue')();

  // Bootstrap
  const app = Vue.createApp({
    template: `
        <Greeting />
        <GreetingFC />
      `
  });
  app.component('Greeting', Greeting);
  app.component('GreetingFC', GreetingFC);
  app.mount('#app');
})();
