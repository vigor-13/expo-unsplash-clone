import React from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useQueries } from '@tanstack/react-query';
import { getTopicOptions } from '@/services/query';

export interface PrefetchProps {
  children: React.ReactNode;
}

export const Prefetch: React.FC<PrefetchProps> = (props) => {
  const { children } = props;
  const [appIsReady, setAppIsReady] = React.useState(false);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  const queries = useQueries({
    queries: [getTopicOptions()],
  });

  React.useEffect(() => {
    const result = queries.filter((v) => !v.isPending);
    if (result.length > 0) setAppIsReady(true);
  }, [queries]);

  if (!appIsReady) return null;
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};
