<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const result = ref([]);

function parentClicked(event) {
  result.value.push(
    `${event.currentTarget.id} received event for ${event.target.id}.`
  );
}

function childClicked(event) {
  result.value.push(`${event.target.id} received event.`);
}
</script>

<template>
  <div id="parent" @click="parentClicked">
    Parent
    <div id="child" @click="childClicked">Child</div>
  </div>

  <ul style="background-color: lightgray">
    <li v-for="item in result" :key="item">{{ item }}</li>
  </ul>
</template>

<style scoped></style>
