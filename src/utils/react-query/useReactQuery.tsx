import { useFocusManager } from './useFocusManager';
import { useOnlineManager } from './useOnlineManager';

export const useReactQuery = () => {
  useFocusManager();
  useOnlineManager();
};
