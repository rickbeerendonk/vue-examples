/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ComponentA from './ComponentA.js';
import ComponentB from './ComponentB.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentB
  },
  template: `
    <div>
      <h1>App</h1>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
    </div>
  `
};
