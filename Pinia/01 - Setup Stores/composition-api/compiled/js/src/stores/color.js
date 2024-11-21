// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useColorStore = defineStore('color', () => {
  const color = ref('red');
  function switchColor() {
    color.value = color.value === 'red' ? 'blue' : 'red';
  }

  return { color, switchColor };
});
