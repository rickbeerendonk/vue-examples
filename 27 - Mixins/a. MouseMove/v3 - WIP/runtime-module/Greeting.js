/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { mouseMoveMixin } from './mouse-move.js';

export default {
  name: 'Greeting',
  mixins: [mouseMoveMixin],
  template: `
    <h1>
      Hello {{ '(x:' + mousePosition.x + ', y: ' + mousePosition.y + ')' }}!
    </h1>`
};
