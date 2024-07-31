import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Item {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[];
  level: number;
  comments_count: number;
}

interface State {
  story: Item;
}

interface Action {
  getStory: (story: Item) => void;
  reset: () => void;
}

const initStory: State = {
  story: {
    id: 0,
    title: '',
    points: 0,
    user: '',
    time: 0,
    time_ago: '',
    content: '',
    type: '',
    comments: [],
    level: 0,
    comments_count: 0,
  },
};

const useStoryStore = create<State & Action>()(
  devtools((set) => ({
    ...initStory,

    getStory: (newStory) =>
      set(() => ({
        story: newStory,
      })),

    reset: () => set(initStory),
  })),
);

export default useStoryStore;
