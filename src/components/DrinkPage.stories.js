import DrinkPage from './DrinkPage'
  
export default {
  title: 'Component/DrinkPage',
  component: DrinkPage,
}

const Template = args => <DrinkPage {...args} />;

export const Default = Template.bind({})
Default.args = {};
