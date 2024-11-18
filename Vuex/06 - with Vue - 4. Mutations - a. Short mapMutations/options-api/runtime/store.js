/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

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
