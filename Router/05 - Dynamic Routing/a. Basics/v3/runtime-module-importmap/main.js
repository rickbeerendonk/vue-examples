/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };

const Page = {
  template: `
    <div>
      <h2>Page {{ $route.params.id }}</h2>
      <p>$route.params:
        <pre>{{ JSON.stringify($route.params, null, 4) }}</pre>
      <p>
    </div>
  `
};

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
