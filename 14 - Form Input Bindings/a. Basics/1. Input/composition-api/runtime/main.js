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
    <input v-model="name" />
    <h1>Hello {{name}}!</h1>

    <div>
      <!-- v-model is shortcut for this -->
      <input :value="name" @input="name = $event.target.value" />
    </div>
  `
});

app.mount('#app');
