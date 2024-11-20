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
    { path: '/page2', name: 'second', component: Page2View },
    {
      path: '/oldpage2',
      redirect: () => (new Date().getMinutes() % 2 === 0 ? '/page2' : '/page1')
    }
  ]
});

export default router;
