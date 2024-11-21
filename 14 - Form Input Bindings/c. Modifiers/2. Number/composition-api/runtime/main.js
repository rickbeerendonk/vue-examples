/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const number1 = ref(undefined);
    const number2 = ref(undefined);

    return {
      number1,
      number2
    };
  },
  template: `
    <p>
      Not number:<br />
      <input type="number" v-model="number1" /><br />
      {{ typeof number1 }} {{ number1 }}
    </p>
    <p>
      Number:<br />
      <input type="number" v-model.number="number2" /><br />
      {{ typeof number2 }} {{ number2 }}
    </p>
  `
});

app.mount('#app');
