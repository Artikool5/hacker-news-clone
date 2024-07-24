import React, { useState } from 'react';
import { Item } from '../store/storyStore';
import styled from 'styled-components';

interface CommentProps {
  key: number;
  comment: Item;
}

const StyledComment = styled.div<{ $indentLevel: number }>`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: ${({ $indentLevel }) => `${$indentLevel * 32}px`};
`;

const CommentInfo = styled.div`
  display: flex;
  gap: 4px;

  color: #828282;
  font-size: 10px;
`;

const CommentToggle = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

const CommentContent = styled.div``;

function Comment({ comment }: CommentProps) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <StyledComment $indentLevel={comment.level}>
      <CommentInfo>
        <span>{comment.user}</span>
        <span>{comment.time_ago}</span>
        <span>|</span>
        <CommentToggle onClick={() => setIsHidden(!isHidden)}>
          {!isHidden ? '[Hide]' : `[${comment.comments_count + 1} more]`}
        </CommentToggle>
      </CommentInfo>
      {isHidden ? null : (
        <>
          <CommentContent dangerouslySetInnerHTML={{ __html: comment.content }} />
          {comment.comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </>
      )}
    </StyledComment>
  );
}

export default Comment;
