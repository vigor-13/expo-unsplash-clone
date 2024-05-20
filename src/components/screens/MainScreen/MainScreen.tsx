import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PhotoList } from '@/components/blocks/PhotoList';
import { PhotoListHeader } from '@/components/blocks/PhotoListHeader';
import { PhotoListTopicHeader } from '@/components/blocks/PhotoListTopicHeader';
import { usePhotos, useRandomPhoto, useTopicsPhotos } from '@/hooks';
import { useTopicStore } from '@/stores';
import { DEFAULT_TOPIC_DATA } from '@/dto';
import { useScrollToTopOnTopicChange } from './useScrollToTopOnTopicChange';

export const MainScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { flatListRef } = useScrollToTopOnTopicChange();
  const { activeTopic } = useTopicStore((state) => state);
  const { data: randomPhoto } = useRandomPhoto();
  const { query: photosQuery, list: photos } = usePhotos();
  const { query: topicsPhotosQuery, list: topicsPhotos } = useTopicsPhotos();

  return activeTopic.slug === DEFAULT_TOPIC_DATA.slug ? (
    <View style={[{ paddingTop: insets.top }]}>
      <PhotoList
        ref={flatListRef}
        data={photos}
        onEndReached={() => {
          photosQuery.fetchNextPage();
        }}
        ListHeaderComponent={() =>
          randomPhoto && <PhotoListHeader data={randomPhoto} />
        }
      />
    </View>
  ) : (
    <View style={[{ paddingTop: insets.top }]}>
      <PhotoList
        ref={flatListRef}
        data={topicsPhotos}
        onEndReached={() => {
          topicsPhotosQuery.fetchNextPage();
        }}
        ListHeaderComponent={() =>
          activeTopic && <PhotoListTopicHeader data={activeTopic} />
        }
      />
    </View>
  );
};
