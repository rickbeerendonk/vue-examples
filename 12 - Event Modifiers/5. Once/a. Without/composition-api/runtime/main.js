/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const count = ref(0); // Will become more than 1

    return {
      count
    };
  },
  template: `
    <button @click="count++">This has been clicked {{count}} times!</button>
  `
});

app.mount('#app');
