/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const checked = ref('A');
    return {
      checked
    };
  },
  template: `
    <p style="color: gray">Joke: C, there can B only A</p>
    <label>
      <input type="radio" v-model="checked" value="A" />
      A
    </label>
    <label>
      <input type="radio" v-model="checked" value="B" />
      B
    </label>
    <label>
      <input type="radio" v-model="checked" value="C" />
      C
    </label>
    <h1>{{checked}}</h1>
  `
});

app.mount('#app');
