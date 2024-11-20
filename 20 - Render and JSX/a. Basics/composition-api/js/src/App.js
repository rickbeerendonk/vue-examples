// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

import { h } from 'vue';

export default {
  setup() {
    return function render() {
      return h(
        'h1', // tag name
        ['Hello Vue', '!'] // array of children
      );
    };
  }
};
