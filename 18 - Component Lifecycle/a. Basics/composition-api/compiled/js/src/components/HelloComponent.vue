<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk          -->

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  nextTick,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
  onUnmounted,
  onRenderTracked,
  onRenderTriggered
} from 'vue';
import { logEvent } from '../utils.js';

const props = defineProps({
  name: {
    type: String,
    default: 'World',
    required: false
  }
});

const count = ref(0);

logEvent('setup()', props, { count: count.value });

onBeforeMount(() => {
  // Called
  // - before the mounting begins: the render function is about to be called for the first time.
  logEvent('onBeforeMount()', props, { count: count.value });
});

onMounted(() => {
  // Called
  // - after the instance has been mounted
  //   el is replaced by the newly created vm.$el.
  //
  // Note: No guarantee all child components have also been mounted.
  //       Use nextTick inside of mounted to wait for all children to be mounted:
  nextTick(() => logEvent('onMounted()', props, { count: count.value }));
});

onBeforeUpdate(() => {
  // Called when data changes
  // - before the DOM is patched. Access existing DOM, f.e. remove manually added event listeners.
  //
  // Note: Not called during server-side rendering
  logEvent('onBeforeUpdate()', props, { count: count.value });
});

onUpdated(() => {
  // Called
  // - after a data change causes the virtual DOM to be re-rendered and patched.
  //
  // Note: No guarantee all child components have also been re-rendered.
  //       Use nextTick inside of updated to wait for all children to be re-rendered:
  nextTick(function () {
    logEvent('onUpdated()', props, { count: count.value });

    // Update data
    if (count.value === 0) {
      count.value = 1;
    }
  });
});
onActivated(() => {
  // Called when a kept-alive component is activated.
  //
  // Note: Not called during server-side rendering
  logEvent('onActivated()', props, { count: count.value });
});
onDeactivated(() => {
  // Called when a kept-alive component is deactivated.
  //
  // Note: Not called during server-side rendering
  logEvent('onDeactivated()', props, { count: count.value });
});
onBeforeUnmount(() => {
  // Called
  // - right before a component instance is unmounted. At this stage the instance is still fully functional.
  //
  // Note: Not called during server-side rendering.
  logEvent('onBeforeUnmount()', props, { count: count.value });
});
onUnmounted(() => {
  // Called
  // - after a component instance has been unmounted.
  //   When this hook is called:
  //   - all directives of the component instance have been unbound,
  //   - all event listeners have been removed,
  //   - all child component instance have also been unmounted.
  //
  // Note: Not called during server-side rendering.
  logEvent('onUnmounted()', props, { count: count.value });
});
onRenderTracked(e => {
  // Called
  // - when virtual DOM re-render is tracked.
  //
  // Note: Tells you what operation tracked the component

  //logEvent(`onRenderTracked(${JSON.stringify(e)})`, this);
  logEvent(`onRenderTracked(e)`, props, { count: count.value });
});
onRenderTriggered(e => {
  // Called
  // - when virtual DOM re-render is triggered.
  //
  // Note: Tells you what operation triggered the re-rendering

  //logEvent(`onRenderTriggered(${JSON.stringify(e)})`, this);
  logEvent(`onRenderTriggered(e)`, props, { count: count.value });
});
</script>

<template>
  <h1>Hello {{ name }}! ({{ count }} time)</h1>
</template>

<style scoped></style>
