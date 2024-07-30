import { useCallback, useRef, useState } from 'react';
import useFeedStore from '../store/feedStore';
import { Item } from '../store/storyStore';

export const useFetchFeed = () => {
  const newsOnPage = useFeedStore((state) => state.newsOnPage);
  const updateFeed = useFeedStore((state) => state.updateFeed);

  const isLoading = useRef(false);
  const [firstLoading, setFirstLoading] = useState(true);

  const fetchFeed = useCallback(async () => {
    if (isLoading.current) return;
    isLoading.current = true;

    try {
      const allNewsResponse = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
      const allNewsParsed = await allNewsResponse.json();
      const allNews: number[] = allNewsParsed.slice(0, newsOnPage);

      const fetchStory = async (newsId: number) => {
        try {
          const storyResponse = await fetch(`https://api.hnpwa.com/v0/item/${newsId}.json`, { cache: 'no-cache' });
          const story: Item = await storyResponse.json();
          return story;
        } catch (error) {
          console.error(`Error fetching story ${newsId}:`, error);
          return null;
        }
      };

      const allPromises = allNews.map(fetchStory);
      const results = await Promise.all(allPromises);
      const validNews = results.filter((story): story is Item => story !== null);
      const sortedNews = validNews.sort((a, b) => b.time - a.time);
      updateFeed(sortedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      isLoading.current = false;
      setFirstLoading(false);
    }
  }, [newsOnPage, updateFeed]);

  return {
    fetchFeed,
    firstLoading,
  };
};
