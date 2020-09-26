/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'https://unpkg.com/vue@next/dist/vue.esm-browser.js';

import vueLoader from './vue-loader.js';

//vueLoader('./App.vue')().then(App => Vue.createApp().mount(App, '#app'));

(async () => {
  const App = await vueLoader('./App.vue')();

  Vue.createApp(App).mount('#app');
})();
