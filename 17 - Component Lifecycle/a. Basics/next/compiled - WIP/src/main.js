/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/*
import Vue from 'vue';

import App from './App.vue';

const vm = new Vue({
  render: h => h(App)
});
const component = vm.$mount();
const elem = document.body.appendChild(component.$el);

setTimeout(function() {
  vm.$destroy();
  document.body.removeChild(elem);
}, 500);
*/

import { createApp } from 'vue';

import App from './App.vue';

// Dynamically create root element
const rootElement = document.createElement('div');
const elem = document.body.appendChild(rootElement);

// Bootstrap
const element = createApp();
element.mount(App, rootElement);

setTimeout(function() {
  // debugger;
  // element.destroy();
  // x.destroy();
  document.body.removeChild(elem);
}, 500);
