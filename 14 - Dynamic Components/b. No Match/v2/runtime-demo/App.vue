<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <label>
      <input v-model="language" type="radio" value="dutch" />
      Dutch
    </label>
    <label>
      <input v-model="language" type="radio" value="english" />
      English
    </label>
    <label>
      <input v-model="language" type="radio" value="spanish" />
      Spanish
    </label>

    <div id="result">
      <component :is="greetingLanguage"></component>
    </div>
  </div>
</template>

<script>
/* global httpVueLoader */
const GreetingDutch = httpVueLoader('./GreetingDutch.vue');
const GreetingEnglish = httpVueLoader('./GreetingEnglish.vue');
const GreetingSpanish = httpVueLoader('./GreetingSpanish.vue');

module.exports = {
  name: 'App',
  components: {
    GreetingDutch,
    GreetingEnglish,
    GreetingSpanish
  },
  data() {
    return {
      language: null
    };
  },
  computed: {
    greetingLanguage() {
      return this.language ? 'greeting-' + this.language : null;
    }
  }
};
</script>

<style scoped>
#result {
  background: bisque;
}
</style>
