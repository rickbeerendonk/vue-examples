/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

import { addToList } from './helpers.js';

const SET_NEW_PROP = 'setNewProp';

const store = new Vuex.Store({
  state: {
    obj: {}
  },
  mutations: {
    [SET_NEW_PROP](state, payload) {
      // Use Object Spread for Reactivity
      state.obj = { ...state.obj, newProp: payload };
    }
  }
});

addToList(store.state);
store._subscribers.push((mutation, state) => addToList(state));

store.commit(SET_NEW_PROP, 123);
