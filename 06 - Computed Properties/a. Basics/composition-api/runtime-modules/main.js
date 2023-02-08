/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref,
  computed
} from '../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    const greeting = ref('Hello World!');
    const uppercaseGreeting = computed(() => greeting.value.toUpperCase());
    return { greeting, uppercaseGreeting };
  }
}).mount('#app');
