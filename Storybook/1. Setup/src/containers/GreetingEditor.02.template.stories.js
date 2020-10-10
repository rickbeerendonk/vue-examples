import GreetingEditor from './GreetingEditor';

// Title + Component

export default {
  title: 'Containers/GreetingEditor/02 - JS Template',
  component: GreetingEditor
};

// Create a "template" of how args map to rendering

const Template = (args, { argTypes }) => ({
  components: { GreetingEditor },
  props: Object.keys(argTypes),
  template: '<GreetingEditor />'
});

// Each story reuses the template

export const Default = Template.bind({});
Default.args = {};
