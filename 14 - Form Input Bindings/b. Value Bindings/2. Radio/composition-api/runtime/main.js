/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const checkedAsNumber = ref(undefined);

    return {
      checkedAsNumber
    };
  },
  template: `
    <label>
      <input type="radio" v-model="checkedAsNumber" :value="1" />
      A
    </label>
    <label>
      <input type="radio" v-model="checkedAsNumber" :value="2" />
      B
    </label>
    <label>
      <input type="radio" v-model="checkedAsNumber" :value="3" />
      C
    </label>
    <h1>{{checkedAsNumber}}</h1>
  `
});

app.mount('#app');
