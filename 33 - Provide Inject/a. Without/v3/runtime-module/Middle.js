/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Bottom from './Bottom.js';

export default {
  name: 'Middle',
  props: {
    color: String
  },
  components: {
    Bottom
  },
  template: '<Bottom :color="color" />'
};
