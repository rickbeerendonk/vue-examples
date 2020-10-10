import Greeting from './Greeting';

// Title + Component

export default {
  title: 'Components/Greeting/02 - JS Template',
  component: Greeting
};

// Create a "template" of how args map to rendering

const Template = (args, { argTypes }) => ({
  components: { Greeting },
  props: Object.keys(argTypes),
  template: '<Greeting :name="name" />'
});

// Each story reuses the template

export const WithoutName = Template.bind({});
WithoutName.args = {};

export const WithName = Template.bind({});
WithName.args = { name: 'Vue 😄' };
