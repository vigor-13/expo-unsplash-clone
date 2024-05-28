import React from 'react';
import RN from 'react-native';
import { onlineManager } from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';

export const useOnlineManager = () => {
  React.useEffect(() => {
    if (RN.Platform.OS !== 'web') {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          state.isConnected != null &&
            state.isConnected &&
            Boolean(state.isInternetReachable),
        );
      });
    }
  }, []);
};
