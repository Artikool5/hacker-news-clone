import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Item } from './storyStore';

interface State {
  feed: Item[];
  newsOnPage: number;
}

interface Action {
  updateFeed: (feed: Item[]) => void;
}

const useFeedStore = create<Action & State>()(
  devtools((set) => ({
    feed: [],
    newsOnPage: 100,

    updateFeed: (newFeed) =>
      set(() => {
        return {
          feed: newFeed,
        };
      }),
  })),
);

export default useFeedStore;
