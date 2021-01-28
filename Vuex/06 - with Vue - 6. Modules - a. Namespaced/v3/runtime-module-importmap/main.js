/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';

import App from './main/components/App.js';
import store from './main/store/index.js';

const app = createApp(App);
app.use(store);
app.mount('#app');
