/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue_2/dist/vue.esm.browser.js';
import VueRouter from '../../../../node_modules/vue-router_3/dist/vue-router.esm.browser.js';

// f.e. Registers router-link and router-view components.
Vue.use(VueRouter);

const Home = { template: '<h2>Home</h2>' };
const Page1 = { template: '<h2>Page 1</h2>' };
const Page2 = { template: '<h2>Page 2</h2>' };

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page1', component: Page1 },
      { path: '/page2', component: Page2 }
    ]
  }),
  methods: {
    navigate(e) {
      // Done in the template: e.preventDefault();
      this.$router.push(
        e.target.dataset.url // location
        // onComplete?,
        // onAbort?
      );
    }
  }
}).$mount('#app');
