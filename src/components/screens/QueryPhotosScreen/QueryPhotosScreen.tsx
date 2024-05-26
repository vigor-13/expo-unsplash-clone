import { PhotoList } from '@/components/blocks/PhotoList';
import { SearchHeader } from '@/components/sections/headers/SearchHeader';
import { useHeader, useSearchPhotos } from '@/hooks';
import { RootStackParamList } from '@/routes/components';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import RN from 'react-native';

export const QueryPhotosScreen: React.FC = () => {
  useHeader({
    header: () => <SearchHeader query={route.params.query} />,
  });

  const route = useRoute<RouteProp<RootStackParamList, 'QueryPhotosScreen'>>();
  const { list, query } = useSearchPhotos({
    query: route.params.query,
  });

  return (
    <RN.View style={styles.container}>
      <PhotoList
        showFiler
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
