/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const selectedAsNumber = ref(undefined);

    return {
      selectedAsNumber
    };
  },
  template: `
    <select v-model="selectedAsNumber">
      <option :value="1">A</option>
      <option :value="2">B</option>
      <option :value="3">C</option>
    </select>
    <h1>{{ selectedAsNumber }}</h1>
  `
});

app.mount('#app');
