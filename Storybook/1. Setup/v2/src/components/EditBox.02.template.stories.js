import EditBox from './EditBox';

// 1. Title + Component

export default {
  title: 'Components/EditBox/02 - JS Template',
  argTypes: { change: { action: 'changed' } },
  component: EditBox
};

// 2. Template of how args map to rendering

const Template = (args, { argTypes }) => ({
  components: { EditBox },
  props: Object.keys(argTypes),
  template: '<EditBox @change="change" :value="value" />'
});

// 3. Each story reuses the template

export const Default = Template.bind({});
Default.args = {};

export const WithValue = Template.bind({});
WithValue.args = { value: 'Vue 😄' };
