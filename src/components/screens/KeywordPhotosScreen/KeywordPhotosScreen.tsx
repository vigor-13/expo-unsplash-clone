import React from 'react';
import RN from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/routes/components';
import { useHeader, useKeywordPhotos } from '@/hooks';
import { PhotoList } from '@/components/blocks/PhotoList';
import { Header } from '@/components/sections/headers/Header';

export const KeywordPhotosScreen: React.FC = () => {
  useHeader({
    header: () => <Header title={route.params.title} />,
  });

  const route =
    useRoute<RouteProp<RootStackParamList, 'KeywordPhotosScreen'>>();
  const { list, query } = useKeywordPhotos({
    query: route.params.query,
    orientation: 'portrait',
  });

  return (
    <RN.View style={styles.container}>
      <PhotoList
        data={list}
        loading={query.status === 'pending'}
        hasNextPage={query.hasNextPage}
        numColumns={2}
        showsVerticalScrollIndicator
        onEndReached={() => {
          query.fetchNextPage();
        }}
      />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
});
