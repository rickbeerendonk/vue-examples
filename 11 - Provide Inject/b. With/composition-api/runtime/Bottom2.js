/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { inject } from 'vue';

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
