import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MainHeader } from '@/components/sections/headers/MainHeader';
import { PhotoList } from '@/components/blocks/PhotoList';
import { PhotoListHeader } from '@/components/blocks/PhotoListHeader';
import { PhotoListTopicHeader } from '@/components/blocks/PhotoListTopicHeader';
import { TopicSubmitBottomSheet } from '@/components/sections/bottomSheets/TopicSubmitBottomSheet';
import { usePhotos, useRandomPhoto, useTopicsPhotos } from '@/hooks';
import { useTopicStore } from '@/stores';
import { DEFAULT_TOPIC_DATA } from '@/dto';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
// import { useScrollToTopOnTopicChange } from './useScrollToTopOnTopicChange';

export const MainScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  // const { flatListRef } = useScrollToTopOnTopicChange();
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const { activeTopic } = useTopicStore((state) => state);
  const { data: randomPhoto } = useRandomPhoto();
  const { query: photosQuery, list: photos } = usePhotos();
  const { query: topicsPhotosQuery, list: topicsPhotos } = useTopicsPhotos();

  const handleOpenSheet = React.useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <>
      <View style={[{ paddingTop: insets.top, position: 'relative', flex: 1 }]}>
        <MainHeader />
        {activeTopic.slug === DEFAULT_TOPIC_DATA.slug ? (
          <PhotoList
            // ref={flatListRef}
            data={photos}
            loading={photosQuery.status === 'pending'}
            hasNextPage={photosQuery.hasNextPage}
            onEndReached={photosQuery.fetchNextPage}
            ListHeaderComponent={() =>
              randomPhoto && <PhotoListHeader data={randomPhoto} />
            }
          />
        ) : (
          <PhotoList
            // ref={flatListRef}
            data={topicsPhotos}
            loading={topicsPhotosQuery.status === 'pending'}
            hasNextPage={topicsPhotosQuery.hasNextPage}
            onEndReached={topicsPhotosQuery.fetchNextPage}
            ListHeaderComponent={() =>
              activeTopic && (
                <PhotoListTopicHeader
                  data={activeTopic}
                  onPress={handleOpenSheet}
                />
              )
            }
          />
        )}
      </View>
      <TopicSubmitBottomSheet data={activeTopic} ref={bottomSheetRef} />
    </>
  );
};
