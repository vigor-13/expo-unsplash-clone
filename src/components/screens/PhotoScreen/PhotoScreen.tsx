import React from 'react';
import {
  RouteProp as NativeRouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import { RootStackParamList } from '@/routes/components';
import { StackHeader } from '@/components/blocks/StackHeader';
import { usePhotoStore } from '@/stores';
import { PhotoData } from '@/dto';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type RouteProps = NativeRouteProp<RootStackParamList, 'PhotoScreen'>;

export const PhotoScreen: React.FC = () => {
  const ref = React.useRef(null);
  const navigation = useNavigation();
  const route = useRoute<RouteProps>();
  const dataIndex = route.params.index;
  const { photoList, clearPhotoList } = usePhotoStore((state) => state);
  const [data] = React.useState<PhotoData>(photoList[dataIndex]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <StackHeader title={data.user.name} fixed />,
    });
  }, [navigation, route, data]);

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
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {},
});
