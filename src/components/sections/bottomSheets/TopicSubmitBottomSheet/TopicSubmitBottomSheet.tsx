import React from 'react';
import RN from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconCircleX } from '@tabler/icons-react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { tokens, Text, Button } from '@/ui';
import { TopicData } from '@/dto';
import { calculateImageSize } from '@/libs';

interface Props {
  data: TopicData;
}

export const TopicSubmitBottomSheet = React.forwardRef<BottomSheetModal, Props>(
  (props, ref: any) => {
    const { data } = props;
    const insets = useSafeAreaInsets();
    const [imageContainerWidth, setImageContainerWidth] = React.useState(0);

    const handleImageContainer = React.useCallback(
      (event: RN.LayoutChangeEvent) => {
        const { width } = event.nativeEvent.layout;
        setImageContainerWidth(width);
      },
      [],
    );

    const handleCloseBottomSheet = React.useCallback(() => {
      if (ref) ref.current?.close();
    }, [ref]);

    const renderBackDrop = React.useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          pressBehavior="close"
        />
      ),
      [],
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        enableDynamicSizing
        enablePanDownToClose
        backgroundStyle={styles.background}
        handleComponent={() => null}
        backdropComponent={renderBackDrop}
      >
        <BottomSheetView>
          <RN.View style={styles.header}>
            <Text variant="photoCardTopicTitle">{data.title}</Text>
            <RN.TouchableOpacity onPress={handleCloseBottomSheet}>
              <IconCircleX size={30} color={tokens.st.color.neutral[500]} />
            </RN.TouchableOpacity>
          </RN.View>
          <RN.View style={[styles.body, { marginBottom: insets.bottom }]}>
            <RN.View style={styles.contentContainer}>
              <Text variant="photoCardTopicSubject">정보</Text>
              <Text variant="photoCardTopicDesc">{data.description}</Text>
            </RN.View>
            <RN.View style={styles.contentContainer}>
              <Text variant="photoCardTopicSubject">커뮤니티의 제출 항목</Text>
              <RN.View
                style={styles.imageContainer}
                onLayout={handleImageContainer}
              >
                {data.preview_photos.map((previewPhoto) => {
                  const imageSize = calculateImageSize({
                    containerWidth: imageContainerWidth,
                    count: 4,
                  });
                  return (
                    <RN.Image
                      key={previewPhoto.id}
                      style={{
                        width: imageSize.width,
                        height: imageSize.height,
                      }}
                      source={{ uri: previewPhoto.urls.thumb }}
                    />
                  );
                })}
              </RN.View>
            </RN.View>
            <Button text={`${data.title}에 제출`} />
          </RN.View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
TopicSubmitBottomSheet.displayName = 'TopicSubmitBottomSheet';

const styles = RN.StyleSheet.create({
  background: {
    backgroundColor: tokens.st.color.black,
  },
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
