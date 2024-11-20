/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { ref, onMounted, onUnmounted } from 'vue';

export function useDocumentHidden() {
  const isHidden = ref(document.hidden);

  function handleVisibilityChange() {
    console.log('Hidden:', document.hidden);
    isHidden.value = document.hidden;
  }

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  });

  onUnmounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  });

  return isHidden;
}
