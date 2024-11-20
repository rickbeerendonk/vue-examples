/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { computed } from 'vue';

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
    // Reactive using computed()
    return {
      color: computed(() => this.color)
    };
  },
  methods: {
    switchColor() {
      this.color = this.color === 'red' ? 'blue' : 'red';
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
