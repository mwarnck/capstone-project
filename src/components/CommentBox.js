import styled from 'styled-components';

export default function CommentBox({
  handleSubmitComment,
  id,
  comments,
  commentValue,
  setCommentValue,
}) {
  return (
    <CommentBoxContainer>
      <SubHeading>Leave a comment:</SubHeading>
      <CommentList role="list">
        {comments &&
          comments.map(comment => (
            <CommentItem key={comment.commentId}>
              {comment.commentText}
            </CommentItem>
          ))}
      </CommentList>
      <label htmlFor="commentBox"></label>
      <textarea
        id="commentBox"
        name="commentBox"
        type="text"
        placeholder="Add a comment..."
        rows="10"
        cols="5"
        maxLength="500"
        value={commentValue}
        onChange={e => setCommentValue(e.target.value)}
      />
      <CommentButton
        type="submit"
        disabled={commentValue ? false : true}
        onClick={() => handleSubmitComment(commentValue, id)}
      >
        Comment
      </CommentButton>
    </CommentBoxContainer>
  );
}

const CommentBoxContainer = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 15px;
  min-width: 220px;
  max-width: 70%;

  textarea {
    width: 100%;
    border: 1px solid var(--bg-color-secondary);
    border-radius: 5px;
    padding: 3px 5px;

    &:focus {
      outline: none;
      border-color: var(bg-color-button);
    }
  }
`;

const SubHeading = styled.h3`
  font-weight: bold;
  color: var(--font-color-headlines-bright);
`;

const CommentList = styled.ul`
  list-style: none;
`;

const CommentItem = styled.li`
  color: var(--font-color-text-bright);
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--font-color-text-bright);
`;

const CommentButton = styled.button`
  height: 35px;
  font-size: 1.1rem;
  font-family: sans-serif;
  color: var(--font-color-headlines-bright);
  background-color: var(--bg-color-button);
  border-radius: 5px;
  border: 2px solid var(--bg-color-button);
  margin: 10px 0;

  &:focus,
  &:hover {
    outline: none;
    border-color: var(--font-color-headlines-bright);
  }
`;
