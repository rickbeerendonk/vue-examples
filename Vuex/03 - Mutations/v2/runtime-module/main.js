/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue_2/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex_3/dist/vuex.esm.browser.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    year: 2019
  },
  mutations: {
    increment(state) {
      state.year++;
    }
  }
});

addToList(store.state);

store.commit('increment');

addToList(store.state);
