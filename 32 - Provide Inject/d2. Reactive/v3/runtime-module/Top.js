/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { computed } from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import Middle from './Middle.js';

export default {
  name: 'Top',
  props: {
    initialColor: String
  },
  data() {
    return {
      color: this.initialColor
    };
  },
  provide() {
    return {
      color: computed(() => this.color)
    };
  },
  methods: {
    switchColor() {
      this.color = this.color === 'red' ? 'green' : 'red';
    }
  },
  components: {
    Middle
  },
  template: `
    <Middle />
    <button @click="switchColor">Switch (current: {{color}})</button>
  `
};
