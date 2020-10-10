/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };
const Page1 = { template: '<h2>Page 1</h2>' };
const Page2 = { template: '<h2>Page 2</h2>' };
const NoMatch = {
  template: `
    <h2>No Match</h2>
    <p>pathMatch: {{ $route.params.pathMatch }}</p>
  `
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },

    // Catches all, so must be the last entry:
    // [v2] { path: '*', component: NoMatch }
    // - noMatch can directly navigate to the not-found route using its name
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NoMatch },
    // - In noMatch, params will be encoded when resolving or pushing
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NoMatch }
  ]
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
