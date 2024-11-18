/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './Home.js';
import Page from './Page.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page/:id', component: Page }
  ]
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
