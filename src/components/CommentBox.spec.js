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
        comments={[
          {
            commentId: '123',
            commentText: 'This drink tastes very good with ice',
          },
        ]}
      />
    );

    const commentItem = screen.getByRole('listitem');
    expect(commentItem).toHaveTextContent(
      'This drink tastes very good with ice'
    );
  });

  it('when clicking the button a submit function is called', () => {
    const submitCallback = jest.fn();
    const onChangeCallback = jest.fn();
    render(
      <CommentBox
        handleSubmitComment={submitCallback}
        setCommentValue={onChangeCallback}
        commentValue={'This drink tastes very good with ice'}
        id={'321'}
      />
    );

    const textarea = screen.getByPlaceholderText('Add a comment...');
    userEvent.type(textarea, 'This drink tastes very good with ice');

    expect(onChangeCallback).toHaveBeenCalled();

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);

    expect(submitCallback).toHaveBeenCalledWith(
      'This drink tastes very good with ice',
      '321'
    );
  });
});
