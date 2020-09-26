/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue_2/dist/vue.esm.browser.js';
import VueRouter from '../../../../node_modules/vue-router_3/dist/vue-router.esm.browser.js';

Vue.use(VueRouter);

const Home = { template: '<h2>Home</h2>' };

const Page = {
  // id is now a prop
  props: ['id'],
  template: '<h2>Page {{ id }} </h2>'
};

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page/:id', component: Page, props: true /* id is now a prop */ }
    ]
  })
}).$mount('#app');
