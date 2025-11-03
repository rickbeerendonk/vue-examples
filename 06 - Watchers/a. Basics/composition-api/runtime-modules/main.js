/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp, ref, watch, watchEffect, watchPostEffect } from 'vue';

createApp({
  setup() {
    const count = ref(0);
    const watchChange = ref('');
    const watchEffectChange = ref('');
    const watchPostEffectChange = ref('');

    // watch:
    // - Dependency tracking: Explicitly specify what to watch
    // - Initial run: Lazy by default (unless `immediate: true` is set)
    // - Old value: Provided as second argument in callback
    // - Use case: reacting to specific data changes
    watch(
      count,
      (newValue, oldValue) => {
        watchChange.value = `From ${oldValue} to ${newValue}`;
        console.log(`watch: ${watchChange.value}`);
      },
      {
        //immediate: true // Force on initialisation
      }
    );

    // watchEffect:
    // - Dependency tracking: Automatically tracks dependencies used inside the effect
    // - Initial run: Runs immediately upon setup
    // - Old value: Not provided
    // - Use case: general reactive side effects
    watchEffect(() => {
      watchEffectChange.value = `To ${count.value}`;
      console.log(`watchEffect: ${watchEffectChange.value}`);
    });

    // watchPostEffect:
    // - Dependency tracking: Automatically tracks dependencies used inside the effect
    // - Initial run: Runs immediately after component updates (post-flush timing)
    // - Old value: Not provided
    // - Use case: accessing updated DOM after reactive changes
    watchPostEffect(() => {
      watchPostEffectChange.value = `Count is ${count.value}`;
      console.log(`watchPostEffect: ${watchPostEffectChange.value}`);
    });

    return { count, watchChange, watchEffectChange, watchPostEffectChange };
  }
}).mount('#app');
