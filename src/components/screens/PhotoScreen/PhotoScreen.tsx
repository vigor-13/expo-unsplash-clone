import React from 'react';
import RN from 'react-native';
import {
  RouteProp as NativeRouteProp,
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import { IconInfoCircle } from '@tabler/icons-react-native';
import { RootStackParamList } from '@/routes/components';
import { CircleIconButton } from '@/components/blocks/CircleIconButton';
import { Header } from '@/components/sections/headers/Header';
import { useAuthStore, useMyStore, usePhotoStore } from '@/stores';
import { PhotoData } from '@/dto';
import { tokens, IconButton } from '@/ui';
import { useGetPhoto, useHeader } from '@/hooks';
const { width: screenWidth, height: screenHeight } =
  RN.Dimensions.get('window');

type RouteProps = NativeRouteProp<RootStackParamList, 'PhotoScreen'>;

export const PhotoScreen: React.FC = () => {
  useHeader({
    header: () => <Header title={activeItem.user.name} float />,
  });

  const ref = React.useRef(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProps>();
  const dataIndex = route.params.index;
  const { session } = useAuthStore((state) => state);
  const { photoList, clearPhotoList } = usePhotoStore((state) => state);
  const { toggleLikesPhoto, likesPhoto } = useMyStore((state) => state);
  const [activeItem, setActiveItem] = React.useState<PhotoData>(
    photoList[dataIndex],
  );
  useGetPhoto(activeItem.id);

  const openInfoModal = React.useCallback(() => {
    navigation.navigate('PhotoInfoScreen', { id: activeItem.id });
  }, [activeItem, navigation]);

  const handleLikes = React.useCallback(() => {
    if (!session) {
      navigation.navigate('LoginModalScreen');
    } else {
      toggleLikesPhoto(activeItem);
    }
  }, [session, activeItem, navigation, toggleLikesPhoto]);

  const renderItem: ListRenderItem<PhotoData> = React.useCallback(
    ({ item }) => {
      return (
        <RN.View
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
        </RN.View>
      );
    },
    [],
  );

  const isLikedPhoto = React.useCallback(() => {
    if (!session) return false;
    if (likesPhoto[activeItem.id]) return true;
    return false;
  }, [activeItem, likesPhoto, session]);

  React.useEffect(() => {
    return () => clearPhotoList();
  }, [clearPhotoList]);

  return (
    <RN.View style={styles.container}>
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
          if (viewableItems[0]) setActiveItem(viewableItems[0].item);
        }}
        renderItem={renderItem}
      />
      <IconButton
        icon={IconInfoCircle}
        containerStyle={styles.info}
        onPress={openInfoModal}
      />
      <RN.View style={styles.iconContainer}>
        <CircleIconButton
          iconName="IconHeartFilled"
          active={isLikedPhoto()}
          onPress={handleLikes}
        />
        <CircleIconButton
          iconName="IconPlus"
          onPress={() => alert('준비중입니다.')}
        />
        <CircleIconButton
          iconName="IconArrowDown"
          onPress={() => alert('준비중입니다.')}
          variant="secondary"
        />
      </RN.View>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
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
