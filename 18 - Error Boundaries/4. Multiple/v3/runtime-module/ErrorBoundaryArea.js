/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  data() {
    return {
      error: null
    };
  },
  errorCaptured(err) {
    this.error = err;

    // Don't stop the error from propagating.
    return true;
  },
  template: `
    <div v-if="error" style="background: pink; color: red; padding-left: 0.5rem; overflow: hidden">
      <p>{{ error.message }}</p>
      <pre style="font-size: 0.5rem">{{ error.stack }}</pre>
    </div>
    <slot v-else />
  `
};
