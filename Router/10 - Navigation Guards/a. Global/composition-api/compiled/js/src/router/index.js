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
    { path: '/', component: HomeView },
    { path: '/page1', component: Page1View },
    { path: '/page2', component: Page2View }
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

export default router;
