/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createApp } from 'vue';

import App from './App.vue';

// Dynamically create root element
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// Bootstrap
createApp(App).mount(rootElement);
