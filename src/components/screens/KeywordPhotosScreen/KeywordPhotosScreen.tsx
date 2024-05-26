import React from 'react';
import RN from 'react-native';
import {
  RouteProp as NativeRouteProp,
  useRoute,
} from '@react-navigation/native';
import { RootStackParamList } from '@/routes/components';
import { useHeader, useSearchPhotos } from '@/hooks';
import { PhotoList } from '@/components/blocks/PhotoList';
import { Header } from '@/components/sections/headers/Header';

type RouteProps = NativeRouteProp<RootStackParamList, 'KeywordPhotosScreen'>;

export const KeywordPhotosScreen: React.FC = () => {
  useHeader({
    header: () => <Header title={route.params.title} />,
  });

  const route = useRoute<RouteProps>();
  const { list, query } = useSearchPhotos({
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
