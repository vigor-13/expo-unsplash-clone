import { SessionData } from '@/dto';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface State {
  session: SessionData;
}
interface Action {
  setSession: (data: SessionData) => void;
}

export const useAuthStore = create<State & Action>()(
  immer((set) => ({
    session: null,
    setSession: (data) => {
      set((state) => {
        state.session = data;
      });
    },
  })),
);
