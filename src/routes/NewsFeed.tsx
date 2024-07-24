import { useCallback, useEffect } from 'react';
import {
  FeedItem,
  Index,
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
  Pagination,
  PaginationButton,
  StoryLink,
} from './NewsFeed.styles';
import useFeedStore from '../store/feedStore';

function NewsFeed() {
  const newsOnPage = useFeedStore((state) => state.newsOnPage);
  const feed = useFeedStore((state) => state.visibleFeed);
  const currentPage = useFeedStore((state) => state.currentPage);
  const maxPage = useFeedStore((state) => state.maxLoadedPage);
  const updateFeed = useFeedStore((state) => state.updateFeed);
  const getNewPageFeed = useFeedStore((state) => state.getNewPageFeed);
  const getPrevPageFeed = useFeedStore((state) => state.getPrevPageFeed);
  const getNextPageFeed = useFeedStore((state) => state.getNextPageFeed);

  function handleNewFeed() {
    if (maxPage === currentPage) {
      fetch(`https://api.hnpwa.com/v0/newest/${currentPage + 1}.json`, { cache: 'no-cache' })
        .then((r) => r.json())
        .then((feed) => getNewPageFeed(feed))
        .catch((reason) => console.error(reason));
    } else getNextPageFeed();
  }

  function handlePrevFeed() {
    getPrevPageFeed();
  }

  const fetchUpdateFeed = useCallback(() => {
    fetch(`https://api.hnpwa.com/v0/newest/${currentPage}.json`, { cache: 'no-cache' })
      .then((r) => r.json())
      .then((feed) => updateFeed(feed))
      .catch((reason) => console.error(reason));
  }, [currentPage, updateFeed]);

  useEffect(() => {
    fetchUpdateFeed();
    const updateTimer = setInterval(fetchUpdateFeed, 1000 * 60);

    return () => clearInterval(updateTimer);
  }, [fetchUpdateFeed]);

  return (
    <>
      {feed.map((story, i) => {
        const storyIndex = (currentPage - 1) * newsOnPage + i + 1;
        return (
          <FeedItem key={story.id}>
            <Index>{storyIndex}</Index>
            <Upvote src="https://news.ycombinator.com/triangle.svg" />
            <FeedItemDescription>
              <FeedItemConteiner>
                <StoryHeading>
                  <StoryLink to={`news/${story.id}`}>{story.title}</StoryLink>
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
        );
      })}
      <Pagination>
        <PaginationButton onClick={handlePrevFeed} disabled={currentPage < 2}>
          Back
        </PaginationButton>
        <PaginationButton onClick={handleNewFeed}>More</PaginationButton>
        <PaginationButton onClick={fetchUpdateFeed}>Refresh</PaginationButton>
      </Pagination>
    </>
  );
}

export default NewsFeed;
