/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

import { addToList } from './helpers.js';

const INCREASE = 'INCREASE';

const moduleA = {
  state: {
    value: 0
  },
  mutations: {
    [INCREASE](state) {
      state.value++;
    }
  },
  actions: {
    [INCREASE](context) {
      context.commit(INCREASE);
    }
  }
};

const CHANGE_NAME = 'CHANGE_NAME';

const moduleB = {
  state: {
    name: 'CreateStore'
  },
  mutations: {
    [CHANGE_NAME](state, payload) {
      state.name = payload.name;
    }
  },
  actions: {
    [CHANGE_NAME]({ commit }, payload) {
      commit(CHANGE_NAME, payload);
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

// Be aware for name collision between actions from different modules
store.dispatch('INCREASE');

// Be aware for name collision between actions from different modules
store.dispatch('CHANGE_NAME', {
  name: 'ChangedName'
});
