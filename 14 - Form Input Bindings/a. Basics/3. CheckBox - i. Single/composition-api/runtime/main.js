/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const checked = ref(false);
    return {
      checked
    };
  },
  template: `
    <input type="checkbox" v-model="checked" />
    <h1>{{checked}}</h1>
  `
});

app.mount('#app');
