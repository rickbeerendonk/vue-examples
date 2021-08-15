/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  // name required for recursive components
  name: 'GreetingComponent',
  data() {
    return {
      recursive: false
    };
  },
  template: `
    <button @click="recursive = true" :disabled="recursive">Hello World!</button>
    <greeting-component v-if="recursive" />
  `
};
