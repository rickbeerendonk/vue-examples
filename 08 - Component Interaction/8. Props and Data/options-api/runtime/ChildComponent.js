/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'GreetingComponent',
  props: ['prop-value'],
  template: `
    <h1>Child</h1>
    <div>
      <label for="value">Property: </label>
      <input id="value" v-model="propValue">
    </div>
    <h1>Property: {{propValue}}</h1>
  `
};
