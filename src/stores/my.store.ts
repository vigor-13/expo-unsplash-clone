import { Photo, PhotoDetail } from '@/services';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface State {
  likesPhoto: {
    [id: string]: Photo | PhotoDetail;
  };
}
interface Action {
  toggleLikesPhoto: (data: Photo | PhotoDetail) => void;
}

export const useMyStore = create<State & Action>()(
  immer(
    persist(
      (set) => ({
        likesPhoto: {},
        toggleLikesPhoto: (data) =>
          set((state) => {
            if (state.likesPhoto[data.id]) {
              delete state.likesPhoto[data.id];
            } else {
              state.likesPhoto[data.id] = data;
            }
          }),
      }),
      {
        name: 'my-store',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
