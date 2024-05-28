import React from 'react';
import RN from 'react-native';
import { focusManager } from '@tanstack/react-query';

export const useFocusManager = () => {
  React.useEffect(() => {
    const subscription = RN.AppState.addEventListener('change', (status) => {
      if (RN.Platform.OS !== 'web') {
        focusManager.setFocused(status === 'active');
      }
    });

    return () => subscription.remove();
  }, []);
};
