import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentBox from './CommentBox';

describe('CommentBox', () => {
  it('renders a heading, a textarea and a button', () => {
    render(<CommentBox />);

    const heading = screen.getByText(/leave/i);
    expect(heading).toBeInTheDocument();

    const textarea = screen.getByPlaceholderText('Add a comment...');
    expect(textarea).toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  });

  it('when the drink has comments in its data, a li element should be rendered', () => {
    render(
      <CommentBox
        comments={[{ commentId: '123', commentText: 'dies ist ein Comment' }]}
      />
    );

    const commentItem = screen.getByRole('listitem');
    expect(commentItem).toBeInTheDocument();
  });

  it('when clicking the button a submit function is called', () => {
    const submitCallback = jest.fn();
    const onChangeCallback = jest.fn();
    render(
      <CommentBox
        handleSubmitComment={submitCallback}
        setCommentValue={onChangeCallback}
        commentValue={true}
      />
    );

    const textarea = screen.getByPlaceholderText('Add a comment...');
    userEvent.type(textarea, 'test');

    expect(onChangeCallback).toHaveBeenCalled();

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);

    expect(submitCallback).toHaveBeenCalled();
  });
});
