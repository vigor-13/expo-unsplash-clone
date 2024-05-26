import React from 'react';
import RN from 'react-native';
import {
  MasonryFlashList,
  MasonryFlashListProps,
  MasonryFlashListRef,
} from '@shopify/flash-list';
import { Spinner, tokens } from '@/ui';
import { PhotoCard } from '@/components/blocks/PhotoCard';
import { usePhotoStore } from '@/stores';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/routes/components';
import { PhotoData } from '@/dto';
import { Logo } from '../Logo';
import { FilterButton } from '../FilterButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface Props extends Omit<MasonryFlashListProps<any>, 'renderItem'> {
  loading?: boolean;
  hasNextPage?: boolean;
  showFiler?: boolean;
}

export const PhotoList = React.forwardRef<MasonryFlashListRef<any>, Props>(
  (props, ref) => {
    const {
      data,
      numColumns,
      loading,
      hasNextPage,
      showFiler,
      onEndReached,
      ListHeaderComponent,
      ...rest
    } = props;
    const { setPhotoList } = usePhotoStore((state) => state);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const insets = useSafeAreaInsets();

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
          <RN.View style={styles.emptyComponentContainer}>
            <Logo size={30} color={tokens.st.color.neutral[600]} />
          </RN.View>
        );
      }
    };

    const onPressPhotoCard = (index: number) => {
      setPhotoList(data as PhotoData[]);
      navigation.navigate('PhotoScreen', { index });
    };

    return (
      <RN.View style={styles.container}>
        <MasonryFlashList
          ref={ref as React.RefObject<any>}
          numColumns={numColumns}
          data={data}
          estimatedItemSize={150}
          renderItem={({ item, index }) => (
            <PhotoCard
              data={item}
              cols={numColumns}
              onPress={() => onPressPhotoCard(index)}
            />
          )}
          onEndReached={handleEndReached}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={renderListFooterComponent}
          ListEmptyComponent={renderListEmptyComponent}
          indicatorStyle="white"
          {...rest}
        />
        {showFiler && (
          <FilterButton
            style={[styles.filterButton, { bottom: insets.bottom + 20 }]}
          />
        )}
      </RN.View>
    );
  },
);
PhotoList.displayName = 'PhotoList';

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  spinner: {
    paddingVertical: 40,
  },
  emptyComponentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.st.space[300],
  },
  filterButton: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -24 }],
  },
});
