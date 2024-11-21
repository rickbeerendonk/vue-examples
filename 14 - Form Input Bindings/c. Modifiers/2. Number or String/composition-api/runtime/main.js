/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const value = ref(undefined);

    return {
      value
    };
  },
  template: `
    <p>
      Try to make a number:<br />
      <input v-model.number="value" /><br />
      {{ typeof value }} {{ value }}
    </p>
  `
});

app.mount('#app');
