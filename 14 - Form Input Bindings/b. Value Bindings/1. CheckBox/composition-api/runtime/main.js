/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const checkedAsString = ref('no');
    return {
      checkedAsString
    };
  },
  template: `
    <input
      type="checkbox"
      v-model="checkedAsString"
      true-value="yes"
      false-value="no"
    />
    <h1>{{checkedAsString}}</h1>
  `
});

app.mount('#app');
