/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Middle from './Middle.js';
import Bottom from './Bottom.js';

export default {
  name: 'Top',
  /*
  // Uncomment to see the default isn't used (WIP)
  provide() {
    return {
      color: 'red'
    };
  },
  */
  components: {
    Bottom,
    Middle
  },
  template: `
    <Middle />
  `
};
