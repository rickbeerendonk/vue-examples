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
    {
      path: '/page2',
      component: Page2View,
      beforeEnter: (to, from, next) => {
        if (confirm(`Do you want to enter ${to.path}?`)) {
          next();
        } else {
          next(false);
        }
      }
    }
  ]
});

export default router;
