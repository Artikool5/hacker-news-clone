import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

interface State {
  feed: FeedItem[];
  visibleFeed: FeedItem[];
  currentPage: number;
  maxLoadedPage: number;
  newsOnPage: number;
}

interface Action {
  getFeed: (feed: FeedItem[]) => void;
  updateFeed: (feed: FeedItem[]) => void;
  getNewPageFeed: (feed: FeedItem[]) => void;
  getPrevPageFeed: () => void;
  getNextPageFeed: () => void;
}

const useFeedStore = create<Action & State>()(
  devtools((set) => ({
    feed: [],
    visibleFeed: [],
    currentPage: 1,
    maxLoadedPage: 1,
    newsOnPage: 30,

    getFeed: (feed) => set(() => ({ feed, visibleFeed: feed })),

    updateFeed: (newFeed) =>
      set(({ feed, currentPage, newsOnPage, maxLoadedPage }) => {
        let updatedFeed, firstStory, lastStory;

        if (currentPage === 1) {
          updatedFeed = [...newFeed, ...feed.slice(newsOnPage)];
        } else if (currentPage === maxLoadedPage && currentPage > 1) {
          updatedFeed = [...feed.slice(0, -newsOnPage), ...newFeed];
        } else {
          lastStory = newsOnPage * (currentPage - 1);
          firstStory = lastStory + newsOnPage;

          updatedFeed = [...feed.slice(0, lastStory), ...newFeed, ...feed.slice(firstStory)];
        }

        return {
          visibleFeed: newFeed,
          feed: updatedFeed,
        };
      }),

    getNewPageFeed: (newFeed) =>
      set(({ feed, currentPage }) => ({
        feed: [...feed, ...newFeed],
        visibleFeed: newFeed,
        currentPage: currentPage + 1,
        maxLoadedPage: currentPage + 1,
      })),

    getPrevPageFeed: () =>
      set(({ currentPage, feed, newsOnPage }) => {
        const firstStory = currentPage * newsOnPage - 2 * newsOnPage;
        const lastStory = currentPage * newsOnPage - newsOnPage;
        return currentPage < 2
          ? {}
          : {
              visibleFeed: feed.slice(firstStory, lastStory),
              currentPage: currentPage - 1,
            };
      }),

    getNextPageFeed: () =>
      set(({ currentPage, feed, newsOnPage }) => {
        const firstStory = currentPage * newsOnPage;
        const lastStory = currentPage * newsOnPage * 2;
        return {
          visibleFeed: feed.slice(firstStory, lastStory),
          currentPage: currentPage + 1,
        };
      }),
  })),
);

export default useFeedStore;
