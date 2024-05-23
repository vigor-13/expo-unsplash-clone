import React from 'react';
import {
  RouteProp as NativeRouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { RootStackParamList } from '@/routes/components';
import { StackHeader } from '@/components/blocks/StackHeader';
import { useSearchPhotos } from '@/hooks';
import { PhotoList } from '@/components/blocks/PhotoList';

type RouteProps = NativeRouteProp<RootStackParamList, 'KeywordPhotosScreen'>;

export const KeywordPhotosScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProps>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <StackHeader title={route.params.title} />,
    });
  }, [navigation, route]);

  const { list, query } = useSearchPhotos({
    query: route.params.query,
    orientation: 'portrait',
  });

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
