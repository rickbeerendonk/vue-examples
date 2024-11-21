/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const selected = ref('B');
    return {
      selected
    };
  },
  template: `
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <h1>{{selected}}</h1>

  `
});

app.mount('#app');
