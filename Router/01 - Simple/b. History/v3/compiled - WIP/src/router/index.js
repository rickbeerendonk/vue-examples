/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRouter, createWebHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };
const Page1 = { template: '<h2>Page 1</h2>' };
const Page2 = { template: '<h2>Page 2</h2>' };

const router = createRouter({
  // Use HTML5 history mode
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 }
  ]
});

export default router;
