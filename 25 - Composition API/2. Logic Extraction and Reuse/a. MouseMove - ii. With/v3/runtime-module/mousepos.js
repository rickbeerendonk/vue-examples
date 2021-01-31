/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  ref,
  onMounted,
  onUnmounted
} from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

export default function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function handleMouseMove(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove);
  });

  return { x, y };
}
