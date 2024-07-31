import SkeletonLoader from '@/components/SkeletonLoader';
import { useEffect } from 'react';
import { useFetchFeed } from '../api/fetchFeed';
import FeedItem from '../components/FeedItem';
import useFeedStore from '../store/feedStore';
import { Pagination, PaginationButton } from './NewsFeed.styles';

function NewsFeed() {
  const feed = useFeedStore((state) => state.feed);
  const { fetchFeed, firstLoading } = useFetchFeed();

  useEffect(() => {
    fetchFeed();
    const updateTimer = setInterval(fetchFeed, 1000 * 60);

    return () => {
      clearInterval(updateTimer);
    };
  }, [fetchFeed]);

  if (firstLoading) return <SkeletonLoader amount={50} hasIndex />;

  return (
    <>
      {feed.map((story, i) => {
        const storyIndex = i + 1;
        return <FeedItem key={story.id} story={story} storyIndex={storyIndex} needLink={false} />;
      })}
      <Pagination>
        <PaginationButton onClick={fetchFeed}>Refresh</PaginationButton>
      </Pagination>
    </>
  );
}

export default NewsFeed;
