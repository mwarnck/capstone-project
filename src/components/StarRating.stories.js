import StarRating from './StarRating'
  
export default {
  title: 'Component/StarRating',
  component: StarRating,
}

const Template = args => <StarRating {...args} />;

export const Default = Template.bind({})
Default.args = {};
