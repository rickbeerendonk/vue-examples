/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import PageView from '../views/PageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/page1', component: PageView, props: { a: 1, b: 2 } },
    { path: '/page2', component: PageView, props: { a: 3, b: 4 } }
  ]
});

export default router;
