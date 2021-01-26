/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue_2/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex_3/dist/vuex.esm.browser.js';

Vue.use(Vuex);

export const CHANGE = 'change';
export const INCREMENT = 'increment';

const store = new Vuex.Store({
  state: {
    name: 'Svelte',
    year: 2020
  },
  mutations: {
    [CHANGE](state, payload) {
      state.name = payload;
    },
    [INCREMENT](state, payload = 1) {
      state.year += payload;
    }
  },
  actions: {
    [CHANGE]({ commit }, payload) {
      commit(CHANGE, payload);
    },
    [INCREMENT]({ commit }, payload) {
      commit(INCREMENT, payload);
    }
  }
});

// Preserve all actions (can be send to server too)
// Allows replay of actions
store.subscribeAction((action, state) => {
  console.table({
    state: JSON.parse(JSON.stringify(state)),
    action
  });
});

export default store;
