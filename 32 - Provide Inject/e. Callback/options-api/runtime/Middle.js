/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import Bottom from './Bottom.js';
import Switch from './Switch.js';

export default {
  name: 'Middle',
  components: {
    Bottom,
    Switch
  },
  template: `
    <Bottom />
    <Switch />
  `
};
