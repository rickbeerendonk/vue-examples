/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'GreetingComponent',
  props: ['name'],
  template: `
    <div>
      <p style="color: gray">See console for "Avoid mutating" warning</p>
      <input v-model="name" />
      <h1>Hello {{ name }}!</h1>
    </div>
  `
};
