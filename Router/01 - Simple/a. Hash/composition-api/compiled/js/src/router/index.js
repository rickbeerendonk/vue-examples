/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import Page1View from '../views/Page1View.vue';
import Page2View from '../views/Page2View.vue';

const router = createRouter({
  // Use HTML5 history mode
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/page1', component: Page1View },
    { path: '/page2', component: Page2View }
  ]
});

export default router;
