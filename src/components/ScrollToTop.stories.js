import ScrollToTop from './ScrollToTop';

export default {
  title: 'Component/ScrollToTop',
  component: ScrollToTop,
};

const Template = args => <ScrollToTop {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisable: true,
};
