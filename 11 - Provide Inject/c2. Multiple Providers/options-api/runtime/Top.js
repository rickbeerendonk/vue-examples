/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Middle from './Middle.js';
import Bottom from './Bottom.js';

export default {
  name: 'Top',
  props: {
    color: String
  },
  provide() {
    return {
      color: this.color
    };
  },
  components: {
    Bottom,
    Middle
  },
  template: `
    <Middle />
    <Bottom />
  `
};
