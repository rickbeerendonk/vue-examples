/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

import { addToList } from './helpers.js';

const CHANGE = 'CHANGE';

const moduleA = {
  // Namespaced: To prevent name collision
  namespaced: true,
  state: {
    value: 0
  },
  mutations: {
    [CHANGE](state, value) {
      state.value = value;
    }
  },
  actions: {
    [CHANGE]({ commit }, payload) {
      commit(CHANGE, payload);
    }
  }
};

const moduleB = {
  // Namespaced: To prevent name collision
  namespaced: true,
  state: {
    name: 'CreateStore'
  },
  mutations: {
    [CHANGE](state, value) {
      state.name = value;
    }
  },
  actions: {
    [CHANGE]({ commit }, payload) {
      commit(CHANGE, payload.name);
    }
  }
};

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});

addToList(store.state);
store._subscribers.push((mutation, state) => addToList(state));

// Namespaced action name.
store.dispatch('a/CHANGE', 2020);

// Namespaced action name.
store.dispatch('b/CHANGE', {
  name: 'ChangedName'
});
