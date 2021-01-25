/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ClickMe from './ClickMe.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'App',
  components: {
    ClickMe
  },
  data() {
    return {
      id: 0
    };
  },
  template: `
    <div>
      <button @click="id++">Change ID</button>
      <br />
      <ClickMe :key="id" />
    </div>
  `
};
