import React from 'react';
import RN from 'react-native';
import _ from 'lodash';
import { PhotoList } from '@/components/blocks/PhotoList';
import { SearchHeader } from '@/components/sections/headers/SearchHeader';
import { useHeader, useQueryPhotos } from '@/hooks';
import { RootStackParamList } from '@/routes/components';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSearchStore, initialQueryOption } from '@/stores';

export const QueryPhotosScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'QueryPhotosScreen'>>();
  const { queryOption, resetQueryOption } = useSearchStore((state) => state);
  const { list, query } = useQueryPhotos({
    query: route.params.query,
  });

  const isFiltered = () => {
    return _.isEqual(queryOption, initialQueryOption) ? false : true;
  };

  React.useEffect(() => {
    return () => resetQueryOption();
  }, [resetQueryOption]);

  useHeader({
    header: () => <SearchHeader query={route.params.query} />,
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
        showFiler
        filterActive={isFiltered()}
      />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
});
