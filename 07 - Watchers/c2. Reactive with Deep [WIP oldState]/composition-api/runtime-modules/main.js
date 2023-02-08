/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  reactive,
  watch
} from '../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    const state = reactive({ count: 0, change: '' });
    watch(
      () => state,
      (state, oldState) => {
        state.change = `Changed from ${oldState.count} to ${state.count}`;
      },
      {
        deep: true
      }
    );

    return { state };
  }
}).mount('#app');
