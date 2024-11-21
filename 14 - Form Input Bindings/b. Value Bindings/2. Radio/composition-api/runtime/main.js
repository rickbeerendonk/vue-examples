/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const checked = ref('');
    const a = ref('AAA');
    const b = ref('BBB');
    const c = ref('CCC');

    return {
      checked,
      a,
      b,
      c
    };
  },
  template: `
    <label>
      <input type="radio" v-model="checked" v-bind:value="a" />
      A
    </label>
    <label>
      <input type="radio" v-model="checked" v-bind:value="b" />
      B
    </label>
    <label>
      <input type="radio" v-model="checked" v-bind:value="c" />
      C
    </label>
    <h1>{{checked}}</h1>
  `
});

app.mount('#app');
