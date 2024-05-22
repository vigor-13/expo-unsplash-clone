import React from 'react';
import { StyleSheet } from 'react-native';
import {
  MasonryFlashList,
  MasonryFlashListProps,
  MasonryFlashListRef,
} from '@shopify/flash-list';
import { Spinner } from '@/ui';
import { PhotoCard } from '@/components/blocks/PhotoCard';

export interface PhotoListProps
  extends Omit<MasonryFlashListProps<any>, 'renderItem'> {}

export const PhotoList = React.forwardRef<
  MasonryFlashListRef<any>,
  PhotoListProps
>((props, ref) => {
  const { data, numColumns, onEndReached, ListHeaderComponent } = props;
  return (
    data && (
      <MasonryFlashList
        ref={ref as React.RefObject<any>}
        numColumns={numColumns}
        data={data}
        estimatedItemSize={150}
        renderItem={({ item }) => <PhotoCard data={item} cols={numColumns} />}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={() => <Spinner style={styles.spinner} />}
      />
    )
  );
});
PhotoList.displayName = 'PhotoList';

const styles = StyleSheet.create({
  spinner: {
    paddingVertical: 40,
  },
});
