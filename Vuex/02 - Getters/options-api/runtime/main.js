/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

const store = new Vuex.Store({
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
    females: state => state.items.filter(item => item.sex === 'female'),

    // 1b. Property style + Use other getter
    femaleCount: (state, getters) => getters.females.length,

    // 2. Function style
    fromCountry: state => country =>
      state.items.filter(item => item.country === country)
  }
});

document.getElementById('content').innerText = `
  Females:
  ${JSON.stringify(store.getters.females)}

  Female count:
  ${store.getters.femaleCount}

  From country (NL):
  ${JSON.stringify(store.getters.fromCountry('NL'))}
`;
