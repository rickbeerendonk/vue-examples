/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = { template: '<h2>Home</h2>' };
const Page1 = {
  template: `
    <div>
      <h2>Page 1</h2>
      
      <nav>
        <ul>
          <li>
            <router-link to="/page1">Subpage 1</router-link>
          </li>
          <li>
            <router-link to="/page1/sub2">Subpage 2</router-link>
          </li>
          <li>
            <router-link to="/page1/sub3">Subpage 3</router-link>
          </li>
        </ul>
      </nav>

      <router-view></router-view>
    </div>
  `
};
const Page2 = { template: '<h2>Page 2</h2>' };

const SubPage1 = { template: '<h3>Subpage 1</h3>' };
const SubPage2 = { template: '<h3>Subpage 2</h3>' };
const SubPage3 = { template: '<h3>Subpage 3</h3>' };

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    {
      path: '/page1',
      component: Page1,
      children: [
        { path: '', component: SubPage1 },
        { path: 'sub2', component: SubPage2 },
        { path: 'sub3', component: SubPage3 }
      ]
    },
    { path: '/page2', component: Page2 }
  ]
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
