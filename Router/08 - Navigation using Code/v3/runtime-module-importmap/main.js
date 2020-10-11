/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };
const Page1 = { template: '<h2>Page 1</h2>' };
const Page2 = { template: '<h2>Page 2</h2>' };

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 }
  ]
});

const app = Vue.createApp({
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
});
app.use(router);
app.mount('#app');
