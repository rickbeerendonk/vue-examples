/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { defineAsyncComponent } from 'vue';

const Greeting = defineAsyncComponent(() => import('./Greeting.js'));

export default {
  name: 'App',
  components: {
    Greeting
  },
  data() {
    return {
      visible: false
    };
  },
  template: `
    <button @click="visible = !visible">
      {{ visible ? 'Hide' : 'Show' }}
    </button>
    <Suspense v-if="visible">
      <template #default>
        <Greeting />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  `
};
