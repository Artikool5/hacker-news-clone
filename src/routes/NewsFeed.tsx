import { useCallback, useEffect } from 'react';
import FeedItem from '../components/FeedItem';
import useFeedStore from '../store/feedStore';
import { Pagination, PaginationButton } from './NewsFeed.styles';

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
        return <FeedItem key={story.id} story={story} storyIndex={storyIndex} />;
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
