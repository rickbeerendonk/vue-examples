/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { version } from 'vue';

export default {
  setup() {
    const greeting = `Vue ${version}!`;
    return { greeting };
  },
  template: `{{ greeting }}`
};
