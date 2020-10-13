/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

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
    // Not reactive by default
    return {
      color: this.color
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
