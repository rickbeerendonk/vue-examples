// European Union Public License version 1.2
// Copyright © 2020 Rick Beerendonk

import { defineProps, h } from 'vue';

export default {
  setup() {
    defineProps({
      name: {
        type: String,
        required: true
      }
    });

    return function render() {
      return h(
        'h1', // tag name
        null, // object with attributes
        ['Hello ', name, '!'] // array of children
      );
    };
  }
};
