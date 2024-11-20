/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import Page1View from '../views/Page1View.vue';
import Page2View from '../views/Page2View.vue';
import NoMatch from '../views/NoMatch.vue';

const router = createRouter({
  // Use HTML5 history mode
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/page1', component: Page1View },
    { path: '/page2', component: Page2View },

    // Catches all, so must be the last entry:
    // - noMatch can directly navigate to the not-found route using its name
    { path: '/:pathMatch(.*)*', component: NoMatch },
    // - In noMatch, params will be encoded when resolving or pushing
    { path: '/:pathMatch(.*)', component: NoMatch }
  ]
});

export default router;
