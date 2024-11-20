/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';

import App from './App.vue';

// Dynamically create root element
const rootElement = document.createElement('div');
const elem = document.body.appendChild(rootElement);

// Bootstrap
const app = createApp(App);
app.mount(rootElement);

setTimeout(function () {
  app.unmount();
  document.body.removeChild(elem);
}, 500);
