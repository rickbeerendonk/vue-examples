/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

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
      // Useful for asynchronous or expensive operations in response to data changes.
      // Note: watch() can have side effects, but avoid them in computed().
      setTimeout(() => {
        change.value = `Changed from ${oldValue} to ${newValue}`;
      }, 2000);
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
