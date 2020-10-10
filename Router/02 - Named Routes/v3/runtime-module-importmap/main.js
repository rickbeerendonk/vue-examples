/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };
const Page1 = { template: '<h2>Page 1</h2>' };
const Page2 = { template: '<h2>Page 2</h2>' };

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'index', component: Home },
    { path: '/page1', name: 'first', component: Page1 },
    { path: '/page2', name: 'second', component: Page2 }
  ]
});

const app = createApp({});
app.use(router);
app.mount('#app');
