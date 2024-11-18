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
router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
    // This is at page load, so always do:
    next();
  } else {
    if (confirm(`Do you want to leave "${from.path}"?`)) {
      if (confirm(`Do you want to go to "${to.path}"?`)) {
        next();
      } else {
        next(false);
      }
    } else {
      next(false);
    }
  }
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
