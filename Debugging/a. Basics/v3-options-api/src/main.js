/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from 'vue';

import App from './App.vue';

const appDiv = document.createElement('div');
document.body.appendChild(appDiv);

const app = Vue.createApp({
  components: {
    App
  },
  render() {
    return Vue.h(App);
  }
});
app.mount(appDiv);
