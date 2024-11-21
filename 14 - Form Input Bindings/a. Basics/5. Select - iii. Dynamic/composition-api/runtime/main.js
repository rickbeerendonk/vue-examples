/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const options = ref([
      { description: 'Option A', value: 'A' },
      { description: 'Option B', value: 'B' },
      { description: 'Option C', value: 'C' }
    ]);
    const selected = ref('B');

    return {
      options,
      selected
    };
  },
  template: `
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.description }}
      </option>
    </select>
    <h1>{{selected}}</h1>
  `
});

app.mount('#app');
