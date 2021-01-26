/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

import { addToList } from './helpers.js';

const store = new Vuex.Store({
  state: {
    year: 2020
  },
  mutations: {
    increment(state) {
      state.year++;
    }
  },
  actions: {
    increment({ commit } /* Destructur context */) {
      commit('increment');
    }
  }
});

addToList(store.state);
store._subscribers.push((mutation, state) => addToList(state));

store.dispatch('increment');
