// Import your custom component.
import EditBox from './EditBox';

// Name
export default {
  title: 'Components/EditBox/01 - JS Basic',
  component: EditBox
};

// Story "Default"
export const Default = (args, { argTypes }) => ({
  components: { EditBox },
  props: Object.keys(argTypes),
  template: '<EditBox :value="value" @change="change" />'
});

// Story "With Value"
export const WithValue = (args, { argTypes }) => ({
  components: { EditBox },
  props: Object.keys(argTypes),
  template: '<EditBox value="Vue 😄" @change="change" />'
});

// Story "With Value"
export const WithChange = () => ({
  components: { EditBox },
  template: '<EditBox @change="change" />'
});

/*
// Register custom component.
Vue.component('EditBox', EditBox);

storiesOf('Components/EditBox/01 - JS Basic', module)
  .add('Default', () => '<EditBox />')
  .add('With value', () => '<EditBox @change="() => {}" value="Vue" />')
  .add('With onChange', () => ({
    components: {
      EditBox
    },
    props: {
      value: {
        type: String,
        default: 'Vue'
      }
    },
    methods: {
      onChange: action('onChange')
    },
    template: '<EditBox @change="onChange" :value="value" />'
  }));
*/
