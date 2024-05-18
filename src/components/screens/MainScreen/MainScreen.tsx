import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PhotoList } from '@/components/blocks/PhotoList';
import { usePhotoList } from '@/hooks';

export const MainScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { query, list } = usePhotoList();

  return (
    <View style={[{ paddingTop: insets.top }]}>
      <PhotoList
        data={list}
        onEndReached={() => {
          query.fetchNextPage();
        }}
      />
    </View>
  );
};
