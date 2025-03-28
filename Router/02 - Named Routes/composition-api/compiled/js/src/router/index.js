/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import Page1View from '../views/Page1View.vue';
import Page2View from '../views/Page2View.vue';

const router = createRouter({
  // Use HTML5 history mode
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'index', component: HomeView },
    { path: '/page1', name: 'first', component: Page1View },
    { path: '/page2', name: 'second', component: Page2View }
  ]
});
/* 
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
*/

export default router;
