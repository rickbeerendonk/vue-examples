// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

import { h } from 'vue';

export default {
  setup() {
    return function render() {
      return h(
        'a', // tag name
        {
          href: 'https://vuejs.org',
          target: '_blank'
        }, // object with attributes
        ['Vue website'] // array of children
      );
    };
  }
};
