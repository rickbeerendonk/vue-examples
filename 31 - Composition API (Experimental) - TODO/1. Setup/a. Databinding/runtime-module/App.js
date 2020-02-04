/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { reactive } from '../../../../node_modules/vue-next/dist/vue.esm.js';

export default {
  name: 'App',
  setup() {
    const state = reactive({
      count: 0
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment
    };
  },
  template:
    '<h1 @click="increment">This has been clicked {{ state.count }} times!</h1>'
};
