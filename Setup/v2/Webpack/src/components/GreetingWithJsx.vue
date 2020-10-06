<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'GreetingWithJsx',
  props: {
    name: {
      type: String,
      default: 'World',
      required: false
    }
  },
  render() {
    return <h1>Hello {this.name}!</h1>;
  }
});
</script>

<style scoped>
h1 {
  color: #444;
}
</style>
