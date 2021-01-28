/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };
const Page1 = {
  props: ['a', 'b'],
  template: `
    <h2>Page 1</h2>
    a = {{ a }}
    <br />
    b = {{ b }}
  `
};
const Page2 = {
  props: ['a', 'b'],
  template: '<h2>Page 2 (a={{a}}, b={{b}})</h2>'
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1, props: { a: 1, b: 2 } },
    { path: '/page2', component: Page2, props: { a: 3, b: 4 } }
  ]
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
