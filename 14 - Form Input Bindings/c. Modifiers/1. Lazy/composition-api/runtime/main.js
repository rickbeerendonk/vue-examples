/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const name = ref('World');
    return {
      name
    };
  },
  template: `
    <p>Not lazy:<br /><input v-model="name" /></p>
    <p>Lazy:<br /><input v-model.lazy="name" /></p>
    <h1>Hello {{name}}!</h1>
  `
});

app.mount('#app');
