import React from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useQueryClient } from '@tanstack/react-query';
import { getTopicsOptions, getRandomPhotoOptions } from '@/services/query';
import { getPhotos } from '@/services/api';
import { useAuthStore } from './stores';
import { useSession } from './utils';

export interface PrefetchProps {
  children: React.ReactNode;
}

export const Prefetch: React.FC<PrefetchProps> = (props) => {
  const { children } = props;
  const queryClient = useQueryClient();
  const [appIsReady, setAppIsReady] = React.useState(false);
  const { setSession } = useAuthStore((state) => state);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  const prefetch = React.useCallback(async () => {
    await queryClient.prefetchQuery(getRandomPhotoOptions());
    await queryClient.prefetchQuery(getTopicsOptions());
    await queryClient.prefetchInfiniteQuery({
      queryKey: ['photos'],
      queryFn: async ({ pageParam }) => {
        const response = await getPhotos({ page: pageParam });
        return response;
      },
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        if (lastPage.data.length === 0) return;
        return lastPageParam + 1;
      },
      initialPageParam: 1,
      pages: 1,
    });

    setAppIsReady(true);
  }, [queryClient]);

  React.useEffect(() => {
    prefetch();
  }, [prefetch]);

  useSession({ setSession });

  if (!appIsReady) return null;
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};
