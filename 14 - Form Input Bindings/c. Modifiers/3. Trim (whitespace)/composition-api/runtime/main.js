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
    <p>Whitespace not trimmed:<br /><input v-model="name" /></p>
    <p>Whitespace trimmed:<br /><input v-model.trim="name" /></p>
    <h1><pre>Hello {{name}}!</pre></h1>
  `
});

app.mount('#app');
