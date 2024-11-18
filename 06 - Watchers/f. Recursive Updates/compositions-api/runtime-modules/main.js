/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref,
  watch
} from '../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    const count = ref(0);
    const change = ref('');

    watch(count, (newValue, oldValue) => {
      change.value = `Changed from ${oldValue} to ${newValue}`;
    });

    watch(change, () => {
      /*
      [Vue warn]: Maximum recursive updates exceeded. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.
      */
      count.value++;
    });

    return {
      count,
      change
    };
  },
  template: `
    <div>
      <p>Count: {{ count }}</p>
      <p>Change: {{ change }}</p>
      <button @click="count++">Increment</button>
    </div>
  `
}).mount('#app');
