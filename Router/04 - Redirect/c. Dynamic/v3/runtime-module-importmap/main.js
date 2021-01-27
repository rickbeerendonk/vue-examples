/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };
const Page1 = { template: '<h2>Page 1</h2>' };
const Page2 = {
  template: `
    <h2>Page 2</h2>
    <ul>
      <li>$route.name: {{ $route.name }}</li>
      <li>$route.redirectedFrom: <pre>{{ JSON.stringify($route.redirectedFrom, null, 4) }}</pre></li>
    </ul>
  `
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', name: 'second', component: Page2 },
    {
      path: '/oldpage2',
      redirect: () => (new Date().getMinutes() % 2 === 0 ? '/page2' : '/page1')
    }
  ]
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
