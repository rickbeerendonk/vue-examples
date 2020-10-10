<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script>
export default {
  name: 'Greeting',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  render() {
    return <h1 id="greeting">Hello {this.name}!</h1>;
  }
};
</script>

<style>
#greeting {
  color: #444;
}
</style>
