/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// To use Vue Router v4 in the browser:
// Shim: https://github.com/guybedford/es-module-shims
// Or Chrome: chrome://flags/#enable-experimental-productivity-features

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };
const Page1 = { template: '<h2>Page 1</h2>' };
const Page2 = { template: '<h2>Page 2</h2>' };

// [v2] new VueRouter()
const router = createRouter({
  // [v2] mode: 'hash'
  history: createWebHashHistory(),

  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 }
  ]
});

const app = Vue.createApp({});

// [v2] Vue.use(VueRouter)
app.use(router);

app.mount('#app');
