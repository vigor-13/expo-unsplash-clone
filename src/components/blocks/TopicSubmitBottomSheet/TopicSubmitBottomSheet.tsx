import React from 'react';
import {
  Image,
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconCircleX } from '@tabler/icons-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Text, tokens } from '@/ui';
import { TopicData } from '@/dto';
import { calculateImageSize } from '@/libs';

export interface TopicSubmitBottomSheetProps {
  data: TopicData;
  handleClose: () => void;
  onLayout: (e: LayoutChangeEvent) => void;
}

export const TopicSubmitBottomSheet = React.forwardRef<
  BottomSheet,
  TopicSubmitBottomSheetProps
>((props, ref) => {
  const { data, handleClose, onLayout } = props;
  const [imageContainerWidth, setImageContainerWidth] = React.useState(0);

  const handleImageContainer = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setImageContainerWidth(width);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.header}>
        <Text variant="photoCardTopicTitle">{data.title}</Text>
        <TouchableOpacity onPress={handleClose}>
          <IconCircleX size={30} color={tokens.st.color.neutral[500]} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.contentContainer}>
          <Text variant="photoCardTopicSubject">정보</Text>
          <Text variant="photoCardTopicDesc">{data.description}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text variant="photoCardTopicSubject">커뮤니티의 제출 항목</Text>
          <View style={styles.imageContainer} onLayout={handleImageContainer}>
            {data.preview_photos.map((previewPhoto) => {
              const imageSize = calculateImageSize({
                containerWidth: imageContainerWidth,
                count: 4,
              });
              return (
                <Image
                  key={previewPhoto.id}
                  style={{
                    width: imageSize.width,
                    height: imageSize.height,
                  }}
                  source={{ uri: previewPhoto.urls.thumb }}
                />
              );
            })}
          </View>
        </View>
        <Button text={`${data.title}에 제출`} />
      </View>
    </View>
  );
});
TopicSubmitBottomSheet.displayName = 'TopicSubmitBottomSheet';

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    paddingHorizontal: tokens.st.space[200],
    paddingVertical: tokens.st.space[200],
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: tokens.st.color.neutral[800],
    borderBottomWidth: 1,
  },
  body: {
    padding: tokens.st.space[200],
    gap: tokens.st.space[250],
  },
  contentContainer: {
    gap: tokens.st.space[125],
  },
  imageContainer: {
    flexDirection: 'row',
    gap: tokens.st.space[100],
  },
});
