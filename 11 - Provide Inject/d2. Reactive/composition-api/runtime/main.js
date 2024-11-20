/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';

import App from './App.js';

// Bootstrap
const app = createApp(App);

// Temporarily
//app.config.unwrapInjectedRef = true;

app.mount('#app');
