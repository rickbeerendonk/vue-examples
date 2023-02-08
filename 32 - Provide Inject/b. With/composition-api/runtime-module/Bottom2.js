/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { inject } from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

export default {
  name: 'Bottom',
  setup() {
    const myColor = inject('color');

    return {
      myColor
    };
  },
  template: '<h1 :style="{color: myColor}">Bottom 2</h1>'
};
