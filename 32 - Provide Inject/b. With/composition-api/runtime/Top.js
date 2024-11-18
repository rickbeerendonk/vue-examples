/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { provide } from 'vue';

import Middle from './Middle.js';

export default {
  name: 'Top',
  components: {
    Middle
  },
  props: {
    color: String
  },
  setup(props) {
    provide('color', props.color);
  },
  template: '<Middle />'
};
