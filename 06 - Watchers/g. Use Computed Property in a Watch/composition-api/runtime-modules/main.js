/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref,
  computed,
  watch
} from '../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    const count = ref(0);
    const change = ref('');

    const countText = computed(() => {
      if (count.value < 3) {
        return 'low';
      }
      if (count.value < 10) {
        return 'normal';
      }
      return 'high';
    });

    watch(count, newValue => {
      change.value = `Changed to ${newValue} (${countText.value})`;
    });

    return {
      count,
      change,
      countText
    };
  },
  template: `
    <div>
      <p>Count: {{ count }}</p>
      <p>Count Text: {{ countText }}</p>
      <p>Change: {{ change }}</p>
      <button @click="count++">Increment</button>
    </div>
  `
}).mount('#app');
