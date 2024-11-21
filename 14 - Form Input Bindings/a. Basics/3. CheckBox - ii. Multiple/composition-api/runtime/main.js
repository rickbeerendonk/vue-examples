/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const checked = ref([]);
    return {
      checked
    };
  },
  template: `
    <label>
      <input type="checkbox" v-model="checked" value="A" />
      A
    </label>
    <label>
      <input type="checkbox" v-model="checked" value="B" />
      B
    </label>
    <label>
      <input type="checkbox" v-model="checked" value="C" />
      C
    </label>
    <h1>{{checked}}</h1>

  `
});

app.mount('#app');
