import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { DEFAULT_TOPIC_DATA, TopicData } from '@/dto';

interface State {
  activeTopic: TopicData;
}
interface Action {
  setActiveTopic: (id: TopicData) => void;
}

export const useTopicStore = create<State & Action>()(
  immer((set) => ({
    activeTopic: DEFAULT_TOPIC_DATA,
    setActiveTopic: (topic) => {
      set((state) => {
        state.activeTopic = topic;
      });
    },
  })),
);
