/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    name: 'CreateStore'
  }
});

document.getElementById('content').innerText = JSON.stringify(store.state);
