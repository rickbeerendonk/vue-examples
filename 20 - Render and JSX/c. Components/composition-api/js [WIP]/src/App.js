// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

import { h } from 'vue';

import GreetingComponent from './components/GreetingComponent.js';

export default {
  setup() {
    return function render() {
      return h(
        GreetingComponent, // tag name
        {
          name: 'World'
        } // object with attributes
        // [Optional] array of children
      );
    };
  }
};
