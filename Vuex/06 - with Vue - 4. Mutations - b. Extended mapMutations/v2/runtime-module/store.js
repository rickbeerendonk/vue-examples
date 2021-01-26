/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue_2/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex_3/dist/vuex.esm.browser.js';

Vue.use(Vuex);

export const INCREMENT = 'increment';

export default new Vuex.Store({
  state: {
    year: 2020
  },
  mutations: {
    [INCREMENT](state, payload = 1) {
      state.year += payload;
    }
  }
});
