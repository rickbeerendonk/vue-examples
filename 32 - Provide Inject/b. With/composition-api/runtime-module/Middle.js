/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import Bottom1 from './Bottom1.js';
import Bottom2 from './Bottom2.js';

export default {
  name: 'Middle',
  components: {
    Bottom1,
    Bottom2
  },
  template: '<Bottom1 /><Bottom2 />'
};
