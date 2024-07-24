import React, { useCallback, useEffect } from 'react';
import { Button, CommentSection, Return } from './NewsStory.styles';
import {
  FeedItem,
  Upvote,
  FeedItemDescription,
  FeedItemConteiner,
  StoryHeading,
  StoryDomain,
  StoryInfo,
  StoryScore,
  StoryUser,
  StoryAge,
  StoryComments,
} from './NewsFeed.styles';
import useStoryStore from '../store/storyStore';
import Comment from '../components/Comment';
import { useParams } from 'react-router-dom';

function NewsStory() {
  const story = useStoryStore((state) => state.story);
  const getStory = useStoryStore((state) => state.getStory);
  const reset = useStoryStore((state) => state.reset);
  const storyId = useParams<{ id: string }>();

  const fetchStory = useCallback(() => {
    fetch(`https://api.hnpwa.com/v0/item/${storyId.id}.json`)
      .then((r) => r.json())
      .then((data) => {
        getStory(data);
      })
      .catch((reason) => console.error(reason));
  }, [getStory, storyId.id]);

  useEffect(() => {
    fetchStory();
    const updateTimer = setInterval(fetchStory, 1000 * 60);

    return () => {
      clearInterval(updateTimer);
      reset();
    };
  }, [fetchStory, reset]);

  return (
    <>
      <Return to="/">&larr; Return</Return>

      <FeedItem>
        <Upvote src="https://news.ycombinator.com/triangle.svg" />
        <FeedItemDescription>
          <FeedItemConteiner>
            <StoryHeading>
              <a href={story.url}>{story.title}</a>
            </StoryHeading>
            {story.domain ? (
              <StoryDomain>
                (<a href={story.url}>{story.domain}</a>)
              </StoryDomain>
            ) : null}
          </FeedItemConteiner>
          <FeedItemConteiner>
            <StoryInfo>
              <StoryScore>{story.points}</StoryScore> points by <StoryUser>{story.user}</StoryUser>{' '}
              <StoryAge>{story.time_ago}</StoryAge> | <StoryComments>{story.comments_count}</StoryComments> comments
            </StoryInfo>
          </FeedItemConteiner>
        </FeedItemDescription>
      </FeedItem>

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
