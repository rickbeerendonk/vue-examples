/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';

import App from './app.js';
import store from './store.js';

const app = createApp(App);
app.use(store);
app.mount('#app');
