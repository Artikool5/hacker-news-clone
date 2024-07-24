import { IFeedItem } from '@/store/feedStore';
import { Item } from '@/store/storyStore';
import {
  FeedItemConteiner,
  FeedItemDescription,
  Index,
  StoryAge,
  StoryComments,
  StoryDomain,
  StoryHeading,
  StoryInfo,
  StoryLink,
  StoryScore,
  StoryUser,
  StyledFeedItem,
  Upvote,
} from './FeedItem.styles';

interface FeedItemProps {
  story: IFeedItem | Item;
  storyIndex?: number;
}

function FeedItem({ story, storyIndex }: FeedItemProps) {
  const isStoryItem = (story: IFeedItem | Item): story is Item => {
    return 'comments' in story;
  };

  return (
    <StyledFeedItem>
      {!storyIndex ? null : <Index>{storyIndex}</Index>}
      <Upvote src="https://news.ycombinator.com/triangle.svg" />
      <FeedItemDescription>
        <FeedItemConteiner>
          <StoryHeading>
            {isStoryItem(story) ? (
              <a href={story.url}>{story.title}</a>
            ) : (
              <StoryLink to={`news/${story.id}`}>{story.title}</StoryLink>
            )}
          </StoryHeading>
          {!story.domain ? null : (
            <StoryDomain>
              (<a href={story.url}>{story.domain}</a>)
            </StoryDomain>
          )}
        </FeedItemConteiner>
        <FeedItemConteiner>
          <StoryInfo>
            <StoryScore>{story.points}</StoryScore> points by <StoryUser>{story.user}</StoryUser>{' '}
            <StoryAge>{story.time_ago}</StoryAge> | <StoryComments>{story.comments_count}</StoryComments> comments
          </StoryInfo>
        </FeedItemConteiner>
      </FeedItemDescription>
    </StyledFeedItem>
  );
}

export default FeedItem;
