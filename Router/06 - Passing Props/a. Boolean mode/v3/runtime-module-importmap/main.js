/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };

const Page = {
  // id is now a prop
  props: ['id'],
  template: '<h2>Page {{ id }} </h2>'
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page/:id', component: Page, props: true /* id is now a prop */ }
  ]
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
