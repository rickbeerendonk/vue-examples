/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { ref, onMounted, onUnmounted } from 'vue';

export function useMouseMove() {
  const mousePosition = ref({ x: undefined, y: undefined });

  function handleMouseMove(e) {
    mousePosition.value = { x: e.pageX, y: e.pageY };
  }

  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove);
  });

  return mousePosition;
}
