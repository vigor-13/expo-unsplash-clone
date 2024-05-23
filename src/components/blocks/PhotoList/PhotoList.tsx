import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  MasonryFlashList,
  MasonryFlashListProps,
  MasonryFlashListRef,
} from '@shopify/flash-list';
import { Spinner, tokens } from '@/ui';
import { PhotoCard } from '@/components/blocks/PhotoCard';
import { Logo } from '../Logo';

export interface Props extends Omit<MasonryFlashListProps<any>, 'renderItem'> {
  loading?: boolean;
  hasNextPage?: boolean;
}

export const PhotoList = React.forwardRef<MasonryFlashListRef<any>, Props>(
  (props, ref) => {
    const {
      data,
      numColumns,
      loading,
      hasNextPage,
      onEndReached,
      ListHeaderComponent,
      ...rest
    } = props;

    const handleEndReached = () => {
      if (!onEndReached) return;
      if (!hasNextPage) return;
      onEndReached();
    };

    const renderListEmptyComponent = () => {
      if (!data) return;
      if (data.length === 0 && loading) {
        return <Spinner />;
      }
    };

    const renderListFooterComponent = () => {
      if (!data || data.length === 0) return null;
      if (hasNextPage) {
        return <Spinner style={styles.spinner} />;
      } else {
        return (
          <View style={styles.emptyComponentContainer}>
            <Logo size={30} color={tokens.st.color.neutral[600]} />
          </View>
        );
      }
    };

    return (
      <MasonryFlashList
        ref={ref as React.RefObject<any>}
        numColumns={numColumns}
        data={data}
        estimatedItemSize={150}
        renderItem={({ item }) => <PhotoCard data={item} cols={numColumns} />}
        onEndReached={handleEndReached}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={renderListFooterComponent}
        ListEmptyComponent={renderListEmptyComponent}
        indicatorStyle="white"
        {...rest}
      />
    );
  },
);
PhotoList.displayName = 'PhotoList';

const styles = StyleSheet.create({
  spinner: {
    paddingVertical: 40,
  },
  emptyComponentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.st.space[300],
  },
});
