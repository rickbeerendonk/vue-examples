/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  data() {
    return {
      error: null
    };
  },
  errorCaptured(err, instance, info) {
    this.error = err;

    console.log('Component:', instance);
    console.log('Info:', info);

    // Stop the error from propagating.
    return false;
  },
  template: `
    <div 
      v-if="error" 
      style="background: pink; color: red; padding-left: 0.5rem; padding-bottom: 0.5rem; overflow: hidden"
    >
      <p>{{ error.message }}</p>
      <pre style="font-size: 0.5rem">{{ error.stack }}</pre>
      <button @click="error = null">Reload</button>
    </div>
    <slot v-else />
  `
};
