import React from 'react';
import { FlatList, View, Image, Dimensions, FlatListProps } from 'react-native';
import { Photo } from '@/services';
import { Text } from '@/ui';
const screenWidth = Dimensions.get('window').width;

export interface PhotoListProps
  extends Omit<FlatListProps<Photo>, 'renderItem'> {}

export const PhotoList: React.FC<PhotoListProps> = (props) => {
  const { data, onEndReached } = props;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const aspectRatio = item.width / item.height;
        const displayWidth = screenWidth;
        const displayHeight = displayWidth / aspectRatio;

        return (
          <View>
            <Image
              source={{ uri: item.urls.regular }}
              style={{
                width: '100%',
                height: displayHeight,
                resizeMode: 'contain',
              }}
            />
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
    />
  );
};
