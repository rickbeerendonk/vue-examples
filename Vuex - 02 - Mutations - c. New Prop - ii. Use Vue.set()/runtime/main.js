/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../node_modules/vuex/dist/vuex.esm.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {
    setNewProp(state, payload) {
      // Use Vue.set() for Reactivity
      Vue.set(state, 'newProp', payload);
    }
  }
});

addToList(store.state);

store.commit('setNewProp', 123);

addToList(store.state);
