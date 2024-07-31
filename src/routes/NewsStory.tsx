import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';
import FeedItem from '../components/FeedItem';
import SkeletonLoader from '../components/SkeletonLoader';
import useStoryStore from '../store/storyStore';
import { Button, CommentSection, Return } from './NewsStory.styles';

function NewsStory() {
  const story = useStoryStore((state) => state.story);
  const getStory = useStoryStore((state) => state.getStory);
  const reset = useStoryStore((state) => state.reset);
  const storyId = useParams<{ id: string }>();
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const fetchStory = useCallback(() => {
    fetch(`https://api.hnpwa.com/v0/item/${storyId.id}.json`)
      .then((r) => r.json())
      .then((data) => {
        getStory(data);
      })
      .catch((reason) => console.error(reason))
      .finally(() => setIsFirstLoading(false));
  }, [getStory, storyId.id]);

  useEffect(() => {
    fetchStory();
    const updateTimer = setInterval(fetchStory, 1000 * 60);

    return () => {
      clearInterval(updateTimer);
      reset();
    };
  }, [fetchStory, reset]);

  if (isFirstLoading)
    return (
      <>
        <SkeletonLoader amount={1} />
        <CommentSection>
          <SkeletonLoader amount={15} />
        </CommentSection>
      </>
    );

  return (
    <>
      <Return to="/">&larr; Return</Return>

      <FeedItem story={story} needLink />
      <CommentSection>
        <Button onClick={fetchStory}>Refresh</Button>
        {story.comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </CommentSection>
    </>
  );
}

export default NewsStory;
