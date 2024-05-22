import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MainHeader } from '@/components/blocks/MainHeader';
import { PhotoList } from '@/components/blocks/PhotoList';
import { PhotoListHeader } from '@/components/blocks/PhotoListHeader';
import { PhotoListTopicHeader } from '@/components/blocks/PhotoListTopicHeader';
import { TopicSubmitBottomSheet } from '@/components/blocks/TopicSubmitBottomSheet';
import { usePhotos, useRandomPhoto, useTopicsPhotos } from '@/hooks';
import { useTopicStore } from '@/stores';
import { DEFAULT_TOPIC_DATA } from '@/dto';
import { BottomSheet, useBottomSheet } from '@/ui';
// import { useScrollToTopOnTopicChange } from './useScrollToTopOnTopicChange';

export const MainScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  // const { flatListRef } = useScrollToTopOnTopicChange();
  const {
    ref: bottomSheetRef,
    snapPoints,
    handleOpenSheet,
    handleCloseSheet,
    getContentHeight,
  } = useBottomSheet({
    initialSnapPoints: ['55%'],
    enableContentFitSnapPoint: true,
  });

  const { activeTopic } = useTopicStore((state) => state);
  const { data: randomPhoto } = useRandomPhoto();
  const { query: photosQuery, list: photos } = usePhotos();
  const { query: topicsPhotosQuery, list: topicsPhotos } = useTopicsPhotos();

  return (
    <>
      <View style={[{ paddingTop: insets.top, position: 'relative', flex: 1 }]}>
        <MainHeader />
        {activeTopic.slug === DEFAULT_TOPIC_DATA.slug ? (
          <PhotoList
            // ref={flatListRef}
            data={photos}
            onEndReached={() => {
              photosQuery.fetchNextPage();
            }}
            ListHeaderComponent={() =>
              randomPhoto && <PhotoListHeader data={randomPhoto} />
            }
          />
        ) : (
          <PhotoList
            // ref={flatListRef}
            data={topicsPhotos}
            onEndReached={() => {
              topicsPhotosQuery.fetchNextPage();
            }}
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
      {activeTopic.preview_photos && (
        /**
         * DEFAULT_TOPIC_DATA 에는 preview_photos 속성이 없음.
         * - TODO: 개선 필요
         */
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
          <TopicSubmitBottomSheet
            ref={bottomSheetRef}
            data={activeTopic}
            handleClose={handleCloseSheet}
            onLayout={getContentHeight}
          />
        </BottomSheet>
      )}
    </>
  );
};
