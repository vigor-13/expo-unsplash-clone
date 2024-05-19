import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import {} from '@/components/blocks/TopicTabButton';
import { DEFAULT_TOPIC_DATA, TopicData } from '@/dto';

export interface TopicState {
  activeTopic: TopicData;
}

export interface TopicAction {
  setActiveTopic: (id: TopicData) => void;
}

export const useTopicStore = create<TopicState & TopicAction>()(
  immer((set) => ({
    activeTopic: DEFAULT_TOPIC_DATA,
    setActiveTopic: (topic) => {
      set((state) => {
        state.activeTopic = topic;
      });
    },
  })),
);
