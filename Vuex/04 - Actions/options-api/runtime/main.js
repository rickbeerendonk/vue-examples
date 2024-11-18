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
    // Actions are similar to mutations, but actions:
    // - commit mutations (don't mutate directly)
    // - can contain arbitrary asynchronous operations.
    increment(context) {
      context.commit('increment');
    }
  }
});

addToList(store.state);
store._subscribers.push((mutation, state) => addToList(state));

// Actions are dispatched to the store.
store.dispatch('increment');
