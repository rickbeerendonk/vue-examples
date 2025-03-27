/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'mouse-move',
  data() {
    return {
      mousePosition: {
        x: undefined,
        y: undefined
      }
    };
  },
  methods: {
    handleMouseMove(e) {
      this.mousePosition = { x: e.pageX, y: e.pageY };
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  unmounted() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  render() {
    return this.$slots.default(this.mousePosition);
  }
};
