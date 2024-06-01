import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { PhotoData } from '@/dto';

interface State {
  photoList: PhotoData[];
}
interface Action {
  setPhotoList: (data: PhotoData[]) => void;
  clearPhotoList: () => void;
}

export const usePhotoStore = create<State & Action>()(
  immer((set) => ({
    photoList: [],
    setPhotoList: (data) => {
      set((state) => {
        state.photoList = data;
      });
    },
    clearPhotoList: () => {
      set((state) => {
        state.photoList = [];
      });
    },
  })),
);
