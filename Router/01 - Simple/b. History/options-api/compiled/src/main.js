/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';

import router from './router/';

import App from './App.vue';

// [v2] new VueRouter()
const app = Vue.createApp(App);

// [v2] Vue.use(VueRouter)
app.use(router);

app.mount('#app');
