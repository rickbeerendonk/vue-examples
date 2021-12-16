/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  ref,
  onErrorCaptured
} from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

export default {
  setup() {
    const error = ref(null);

    onErrorCaptured((err, instance, info) => {
      error.value = err;

      console.log('Component:', instance);
      console.log('Info:', info);

      // Stop the error from propagating.
      return false;
    });

    return { error };
  },
  template: `
    <div v-if="error" style="background: pink; color: red; padding-left: 0.5rem; overflow: hidden">
      <p>{{ error.message }}</p>
      <pre style="font-size: 0.5rem">{{ error.stack }}</pre>
    </div>
    <slot v-else />
  `
};
