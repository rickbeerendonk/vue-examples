/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

import { addToList } from './helpers.js';

const INCREMENT = 'increment';

const store = new Vuex.Store({
  state: {
    year: 2020
  },
  mutations: {
    [INCREMENT](state, payload) {
      state.year += payload.value;
    }
  },
  actions: {
    [INCREMENT]({ commit }, payload) {
      commit(INCREMENT, payload);
    }
  }
});

addToList(store.state);
store._subscribers.push((mutation, state) => addToList(state));

store.dispatch(INCREMENT, {
  value: 5 /* potentially more values */
});
