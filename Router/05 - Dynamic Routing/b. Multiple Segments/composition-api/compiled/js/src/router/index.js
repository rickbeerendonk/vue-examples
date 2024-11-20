/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import PageView from '../views/PageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/page/:id/:sub', component: PageView }
  ]
});

export default router;
