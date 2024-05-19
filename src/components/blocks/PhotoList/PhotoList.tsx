import React from 'react';
import {
  FlatList,
  View,
  Image,
  Dimensions,
  FlatListProps,
  StyleSheet,
} from 'react-native';
import { Photo } from '@/services';
import { Spinner } from '@/ui/core';
const screenWidth = Dimensions.get('window').width;

export interface PhotoListProps
  extends Omit<FlatListProps<Photo>, 'renderItem'> {}

export const PhotoList = React.forwardRef<FlatList, PhotoListProps>(
  (props, ref) => {
    const { data, onEndReached } = props;

    return (
      <FlatList
        ref={ref}
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
        ListFooterComponent={() => <Spinner style={styles.spinner} />}
      />
    );
  },
);
PhotoList.displayName = 'PhotoList';

const styles = StyleSheet.create({
  spinner: {
    paddingTop: 50,
  },
});
