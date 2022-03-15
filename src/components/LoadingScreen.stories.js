import LoadingScreen from './LoadingScreen'
  
export default {
  title: 'Component/LoadingScreen',
  component: LoadingScreen,
}

const Template = args => <LoadingScreen {...args} />;

export const Default = Template.bind({})
Default.args = {};
