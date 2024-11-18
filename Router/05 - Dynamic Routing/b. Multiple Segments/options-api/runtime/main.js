/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };

const Page = {
  template: `
    <h2>Page {{ $route.params.id }}{{ $route.params.sub}}</h2>
    <ul>
      <li>$route.fullPath: {{ $route.fullPath }}</li>
      <li>$route.path: {{ $route.path }}</li>
      <li>$route.params: {{ JSON.stringify($route.params) }}</li>
      <li>$route.query: {{ JSON.stringify($route.query) }}</li>
      <li>$route.name: {{ $route.name }}</li>
      <li>$route.redirectedFrom: {{ $route.redirectedFrom }}</li>
    </ul>
  `
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page/:id/:sub', component: Page }
  ]
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
