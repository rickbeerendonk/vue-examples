/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Page1 from '../components/Page1.vue';
import Page2 from '../components/Page2.vue';

const router = createRouter({
  // Use HTML5 history mode
  // [v2] mode: 'history'
  history: createWebHistory(),

  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 }
  ]
});

export default router;
