<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script>
export default {
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
};
</script>

<style scoped>
h1 {
  color: #bbb;
}
</style>
