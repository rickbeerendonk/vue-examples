/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const message = ref('One\nTwo');
    return {
      message
    };
  },
  template: `
    <textarea v-model="message"></textarea>
    <h1 style="white-space: pre-line">{{message}}</h1>
  `
});

app.mount('#app');
