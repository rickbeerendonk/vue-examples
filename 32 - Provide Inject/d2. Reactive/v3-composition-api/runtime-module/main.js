/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import App from './App.js';

// Bootstrap
const app = createApp(App);

// Temporarily
//app.config.unwrapInjectedRef = true;

app.mount('#app');
