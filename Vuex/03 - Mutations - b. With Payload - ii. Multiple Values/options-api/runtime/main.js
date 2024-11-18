/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

import { addToList } from './helpers.js';

const CHANGE = 'change';

const store = new Vuex.Store({
  state: {
    name: 'Initial',
    year: 2019
  },
  mutations: {
    [CHANGE](state, payload) {
      state.name = payload.name;
      state.year = payload.year;
    }
  }
});

addToList(store.state);
store._subscribers.push((mutation, state) => addToList(state));

store.commit(CHANGE, {
  name: 'Update',
  year: 2020
});
