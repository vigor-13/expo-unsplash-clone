import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryOptionData } from '@/dto';
const MAX_QUERY_LENGTH = 5;

interface State {
  recentQueries: string[];
  queryOption: QueryOptionData;
}
interface Action {
  addRecentQuery: (query: string) => void;
  clearRecentQuery: () => void;
  setQueryOption: (option: QueryOptionData) => void;
  resetQueryOption: () => void;
}

export const initialQueryOption: QueryOptionData = {
  order_by: 'relevant',
};

export const useSearchStore = create<State & Action>()(
  immer(
    persist(
      (set) => ({
        recentQueries: [],
        addRecentQuery: (query) => {
          set((state) => {
            const index = state.recentQueries.indexOf(query);

            if (index !== -1) {
              state.recentQueries.splice(index, 1);
            }

            state.recentQueries.unshift(query);

            if (state.recentQueries.length > MAX_QUERY_LENGTH) {
              state.recentQueries.pop();
            }
          });
        },
        clearRecentQuery: () => {
          set((state) => {
            state.recentQueries = [];
          });
        },

        queryOption: initialQueryOption,
        setQueryOption(option) {
          set((state) => {
            state.queryOption = option;
          });
        },
        resetQueryOption() {
          set((state) => {
            state.queryOption = initialQueryOption;
          });
        },
      }),
      {
        name: 'search-store',
        getStorage: () => AsyncStorage,
      },
    ),
  ),
);
