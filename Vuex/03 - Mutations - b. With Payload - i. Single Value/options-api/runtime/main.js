/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

import { addToList } from './helpers.js';

const INCREMENT = 'increment';

const store = new Vuex.Store({
  state: {
    year: 2019
  },
  mutations: {
    [INCREMENT](state, payload) {
      state.year += payload;
    }
  }
});

addToList(store.state);
store._subscribers.push((mutation, state) => addToList(state));

store.commit(INCREMENT, 5);
