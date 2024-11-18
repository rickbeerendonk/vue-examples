/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    items: [
      { id: 0, sex: 'female', country: 'NL', name: 'Alexandra' },
      { id: 1, sex: 'male', country: 'EN', name: 'Benjamin' },
      { id: 2, sex: 'female', country: 'EN', name: 'Charlotte' },
      { id: 3, sex: 'male', country: 'NL', name: 'Dirk' }
    ]
  },
  getters: {
    // 1a. Property style
    females: state => {
      return state.items.filter(item => item.sex === 'female');
    },

    // 1b. Property style + Use other getter
    femaleCount: (state, getters) => getters.females.length,

    // 2. Function style
    fromCountry: state => country =>
      state.items.filter(item => item.country === country)
  }
});
