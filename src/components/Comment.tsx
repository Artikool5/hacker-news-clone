import { useState } from 'react';
import { Item } from '../store/storyStore';
import { StyledComment, CommentInfo, CommentToggle, CommentContent } from './Comment.styles';

interface CommentProps {
  key: number;
  comment: Item;
}

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
