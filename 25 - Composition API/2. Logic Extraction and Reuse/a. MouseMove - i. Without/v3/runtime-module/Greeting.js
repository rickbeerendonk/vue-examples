/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

export default {
  name: 'Greeting',
  template: `
    <h1>Hello World!</h1>
    <div>
      Mouse position: x {{ mousePosition.x }} / y {{ mousePosition.y }}
    </div>
  `,
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
  // destroyed (Vue 2):
  unmounted() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }
};
