import DrinkForm from './DrinkForm';

export default {
  title: 'Component/DrinkForm',
  component: DrinkForm,
};

const Template = args => <DrinkForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Create your own drink',
  buttonText: 'Create Drink',
};
