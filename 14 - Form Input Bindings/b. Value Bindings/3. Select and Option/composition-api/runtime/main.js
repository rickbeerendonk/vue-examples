/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const option1 = ref('Hello');
    const option2 = ref('Bye');
    const selected = ref('');

    return {
      option1,
      option2,
      selected
    };
  },
  template: `
    <select v-model="selected">
      <option v-bind:value="option1">A</option>
      <option v-bind:value="option2">B</option>
    </select>
    <h1>{{ selected }}</h1>
  `
});

app.mount('#app');
