/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';

import router from './router/';

import App from './App.vue';

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');
