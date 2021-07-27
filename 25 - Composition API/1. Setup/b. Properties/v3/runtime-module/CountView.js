/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { reactive } from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

export default {
  name: 'CountView',
  props: {
    initialCount: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const state = reactive({
      count: props.initialCount
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment
    };
  },
  template:
    '<h1 @click="increment">This has been clicked {{ state.count }} times!</h1>'
};
