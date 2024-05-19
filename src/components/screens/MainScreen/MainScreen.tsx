import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PhotoList } from '@/components/blocks/PhotoList';
import { usePhotos, useTopicsPhotos } from '@/hooks';
import { useTopicStore } from '@/stores';
import { DEFAULT_TOPIC_DATA } from '@/dto';

export const MainScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { query: photosQuery, list: photos } = usePhotos();
  const { query: topicsPhotosQuery, list: topicsPhotos } = useTopicsPhotos();
  const { activeTopic } = useTopicStore((state) => state);

  return activeTopic.slug === DEFAULT_TOPIC_DATA.slug ? (
    <View style={[{ paddingTop: insets.top }]}>
      <PhotoList
        data={photos}
        onEndReached={() => {
          photosQuery.fetchNextPage();
        }}
      />
    </View>
  ) : (
    <View style={[{ paddingTop: insets.top }]}>
      <PhotoList
        data={topicsPhotos}
        onEndReached={() => {
          topicsPhotosQuery.fetchNextPage();
        }}
      />
    </View>
  );
};
