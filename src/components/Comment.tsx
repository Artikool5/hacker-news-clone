import { useState } from 'react';
import { Item } from '../store/storyStore';
import { CommentContent, CommentInfo, CommentToggle, StyledComment } from './Comment.styles';

interface CommentProps {
  comment: Item;
}

function Comment({ comment }: CommentProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [isChildrenHidden, setIsChildrenHidden] = useState(true);

  if (comment.dead || comment.deleted) return null;

  return (
    <StyledComment $indentLevel={comment.level}>
      <CommentInfo>
        <span>{comment.user}</span>
        <span>{comment.time_ago}</span>
        <span>|</span>
        <CommentToggle onClick={() => setIsHidden(!isHidden)}>{isHidden ? '[Hide]' : '[Show]'}</CommentToggle>
      </CommentInfo>
      {!isHidden && (
        <>
          <CommentContent dangerouslySetInnerHTML={{ __html: comment.content }} />
          {!!comment.comments_count && (
            <CommentToggle onClick={() => setIsChildrenHidden(!isChildrenHidden)}>
              {isChildrenHidden ? `[${comment.comments_count} more]` : '[Hide]'}
            </CommentToggle>
          )}
          {!isChildrenHidden &&
            comment.comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}
        </>
      )}
    </StyledComment>
  );
}

export default Comment;
