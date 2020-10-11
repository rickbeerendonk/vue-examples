/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
const Page1 = () => import('./components/Page1.vue');
const Page2 = () => import('./components/Page2.vue');

// Dynamically create root element
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 }
  ]
});

// Bootstrap
const app = Vue.createApp(App);
app.use(router);
app.mount(rootElement);
