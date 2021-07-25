import Greeting from './Greeting';

// 1. Title + Component

export default {
  title: 'Components/Greeting/02 - JS Template',
  component: Greeting
};

// 2. Template of how args map to rendering

const Template = (args, { argTypes }) => ({
  components: { Greeting },
  props: Object.keys(argTypes),
  template: '<Greeting :name="name" />'
});

// 3. Each story reuses the template

export const WithoutName = Template.bind({});
WithoutName.args = {};

export const WithName = Template.bind({});
WithName.args = { name: 'Vue 😄' };
