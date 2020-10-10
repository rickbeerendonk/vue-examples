import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

// Import your custom component.
import EditBox from './EditBox';

// Register custom component.
Vue.component('EditBox', EditBox);

/*
storiesOf('Components/EditBox', module)
  .add('with value', () => <EditBox onChange={() => {}} value="Test" />)
  .add('with onChange', () => <EditBox onChange={action('editbox-change')} />);
*/

storiesOf('Components/EditBox', module)
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
