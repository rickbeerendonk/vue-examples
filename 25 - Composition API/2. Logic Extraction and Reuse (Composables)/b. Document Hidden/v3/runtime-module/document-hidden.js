/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  ref,
  onMounted,
  onUnmounted
} from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

export default function useIsDocumentHidden() {
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
