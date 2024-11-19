<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { defineProps } from 'vue';

defineProps({
  str: String,
  num: Number,
  bool: Boolean,
  arr: Array,
  obj: Object,
  date: Date,
  fun: Function
  //sym: Symbol
});
</script>

<template>
  <h1>Hello</h1>
  <ul>
    <li>String: {{ str }}</li>
    <li>Number: {{ num }}</li>
    <li>Boolean: {{ bool }}</li>
    <li>Array: {{ JSON.stringify(arr) }}</li>
    <li>Object: {{ JSON.stringify(obj) }}</li>
    <li>Date: {{ date }}</li>
    <li>Function: {{ fun.toString() }}</li>
  </ul>
</template>

<style scoped></style>
