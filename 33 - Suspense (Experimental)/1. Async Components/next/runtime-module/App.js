/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { h, Suspense } from '../../../../node_modules/vue-next/dist/vue.esm.js';

const Greeting = () => import('./Greeting.js');

const AsyncGreeting = {
  async setup() {
    return {
      comp: (await Greeting()).default
    };
  },
  render() {
    return h(this.comp);
  }
};

export default {
  name: 'App',
  components: {
    AsyncGreeting
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
        <AsyncGreeting />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  `
};
