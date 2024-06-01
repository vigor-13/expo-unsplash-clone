import React from 'react';
import { FlatList } from 'react-native';

export const useFlatListScroll = () => {
  const flatListRef = React.useRef<FlatList>(null);

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current?.scrollToOffset({
        offset: 0,
        animated: false,
      });
    }
  };

  const scrollToItem = (index: number) => {
    if (flatListRef.current) {
      const viewPosition = 0.5;
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition,
      });
    }
  };

  return {
    flatListRef,
    scrollToTop,
    scrollToItem,
  };
};
