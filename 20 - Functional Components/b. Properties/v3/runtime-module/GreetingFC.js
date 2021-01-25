/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { h } from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

export default {
  name: 'GreetingFC',
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  render(context) {
    return h('h1', ['Hello ', context.$props.name, '! (functional)']);
  }
};
