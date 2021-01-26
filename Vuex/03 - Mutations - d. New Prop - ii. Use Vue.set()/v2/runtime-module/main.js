/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue_2/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex_3/dist/vuex.esm.browser.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const SET_NEW_PROP = 'setNewProp';

const store = new Vuex.Store({
  state: {
    obj: {}
  },
  mutations: {
    [SET_NEW_PROP](state, payload) {
      // Use Vue.set() for Reactivity
      Vue.set(state, 'newProp', payload);
    }
  }
});

addToList(store.state);

store.commit(SET_NEW_PROP, 123);

addToList(store.state);
