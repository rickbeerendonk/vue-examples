/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { computed } from '../../../../node_modules/vue/dist/vue.esm-browser.js';

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
      color: computed(() => this.color),
      switchColor: this.switchColor
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
  template: '<Middle />'
};
