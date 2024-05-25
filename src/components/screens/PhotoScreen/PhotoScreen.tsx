import React from 'react';
import {
  RouteProp as NativeRouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import { IconInfoCircle } from '@tabler/icons-react-native';
import { RootStackParamList } from '@/routes/components';
import { StackHeader } from '@/components/blocks/StackHeader';
import { CircleIconButton } from '@/components/blocks/CircleIconButton';
import { usePhotoStore } from '@/stores';
import { PhotoData } from '@/dto';
import { tokens, IconButton } from '@/ui';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type RouteProps = NativeRouteProp<RootStackParamList, 'PhotoScreen'>;

export const PhotoScreen: React.FC = () => {
  const ref = React.useRef(null);
  const navigation = useNavigation();
  const route = useRoute<RouteProps>();
  const dataIndex = route.params.index;
  const { photoList, clearPhotoList } = usePhotoStore((state) => state);
  const [activeItem, setActiveItem] = React.useState<PhotoData>(
    photoList[dataIndex],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <StackHeader title={activeItem.user.name} fixed />,
    });
  }, [navigation, route, activeItem]);

  React.useEffect(() => {
    return () => clearPhotoList();
  }, [clearPhotoList]);

  return (
    <View style={styles.container}>
      <FlashList
        ref={ref}
        data={photoList}
        initialScrollIndex={dataIndex}
        estimatedItemSize={screenWidth}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        snapToAlignment="start"
        decelerationRate="fast"
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems[0]) {
            setActiveItem(viewableItems[0].item);
          }
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: screenWidth,
                height: screenHeight,
              }}
            >
              <ImageZoom
                uri={item.urls.regular}
                minScale={0.5}
                maxScale={10}
                doubleTapScale={3}
                minPanPointers={1}
                isSingleTapEnabled
                isDoubleTapEnabled
                resizeMode="contain"
              />
            </View>
          );
        }}
      />
      <IconButton icon={IconInfoCircle} containerStyle={styles.info} />
      <View style={styles.iconContainer}>
        <CircleIconButton iconName="IconHeartFilled" onPress={() => null} />
        <CircleIconButton iconName="IconPlus" onPress={() => null} />
        <CircleIconButton
          iconName="IconArrowDown"
          onPress={() => null}
          variant="secondary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    position: 'absolute',
    left: tokens.st.space[200],
    bottom: tokens.st.space[600],
  },
  iconContainer: {
    position: 'absolute',
    right: tokens.st.space[200],
    bottom: tokens.st.space[600],
    gap: tokens.st.space['200'],
  },
});
