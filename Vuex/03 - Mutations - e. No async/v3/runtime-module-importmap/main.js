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
    [INCREMENT](state) {
      // Never use async functions, because it is hard to debug.
      // This is wrong:
      (async () => {
        // And this is also wrong:
        setTimeout(() => {
          state.year++;
        }, 1000);
      })();
    }
  }
});

addToList(store.state);
store._subscribers.push((mutation, state) => addToList(state));

store.commit(INCREMENT);

// Somewhere in the future the value will be correct:
setTimeout(() => addToList(store.state), 1500);
