/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'GreetingComponent',
  props: ['initialName'],
  data() {
    return {
      name: this.initialName
    };
  },
  template: `
    <input v-model="name" />
    <h1>Hello {{ name }}!</h1>
    <p>InitialName: {{ initialName }}</p>
  `
};
