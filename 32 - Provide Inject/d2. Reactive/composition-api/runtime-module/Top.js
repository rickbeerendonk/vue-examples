/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  ref,
  provide
} from '../../../../node_modules/vue/dist/vue.esm-browser.js';

import Middle from './Middle.js';

export default {
  name: 'Top',
  props: {
    initialColor: String
  },
  setup(props) {
    const color = ref(props.initialColor);
    const switchColor = () => {
      color.value = color.value === 'red' ? 'green' : 'red';
    };

    provide('color', color);

    return { color, switchColor };
  },
  components: {
    Middle
  },
  template: `
    <Middle />
    <button @click="switchColor">Switch (current: {{color}})</button>
  `
};
