import FilterDrinks from './FilterDrinks'
  
export default {
  title: 'Component/FilterDrinks',
  component: FilterDrinks,
}

const Template = args => <FilterDrinks {...args} />;

export const Default = Template.bind({})
Default.args = {};
