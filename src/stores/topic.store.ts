import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface TopicState {
  currentTopic: string | null;
}

export interface TopicAction {
  setCurrentTopic: (id: string) => void;
}

export const useTopicStore = create<TopicState & TopicAction>()(
  immer((set) => ({
    currentTopic: null,
    setCurrentTopic: (id) => {
      set((state) => {
        state.currentTopic = id;
      });
    },
  })),
);
