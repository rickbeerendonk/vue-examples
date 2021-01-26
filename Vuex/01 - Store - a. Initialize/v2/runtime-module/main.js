/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue_2/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex_3/dist/vuex.esm.browser.js';

// Always call this first.
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: 'CreateStore'
  }
});

document.getElementById('content').innerText = JSON.stringify(store.state);
