import React from 'react';
import { FlatList, FlatListProps, StyleSheet } from 'react-native';
import { Spinner } from '@/ui/core';
import { PhotoCard } from '@/components/blocks/PhotoCard';
import { PhotoData } from '@/dto';

export interface PhotoListProps
  extends Omit<FlatListProps<PhotoData>, 'renderItem'> {}

export const PhotoList = React.forwardRef<FlatList, PhotoListProps>(
  (props, ref) => {
    const { data, onEndReached } = props;

    return (
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PhotoCard data={item} />}
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
