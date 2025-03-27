/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import PageView from '../views/PageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/newpage/:id', component: PageView },
    {
      path: '/page/:id',
      redirect: router => `/newpage/${router.params.id}`
    }
  ]
});

export default router;
