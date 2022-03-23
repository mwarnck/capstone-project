import CommentBox from './CommentBox'
  
export default {
  title: 'Component/CommentBox',
  component: CommentBox,
}

const Template = args => <CommentBox {...args} />;

export const Default = Template.bind({})
Default.args = {};
