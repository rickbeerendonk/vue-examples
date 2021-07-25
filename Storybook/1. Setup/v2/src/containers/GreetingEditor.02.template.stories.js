import GreetingEditor from './GreetingEditor';

// 1. Title + Component

export default {
  title: 'Containers/GreetingEditor/02 - JS Template',
  component: GreetingEditor
};

// 2. Template of how args map to rendering

const Template = (args, { argTypes }) => ({
  components: { GreetingEditor },
  props: Object.keys(argTypes),
  template: '<GreetingEditor />'
});

// 3. Each story reuses the template

export const Default = Template.bind({});
Default.args = {};
