import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { TopicData } from '@/dto';
import { getHeightByScreenRatio } from '@/libs';
import { Text, Button, tokens, Overlay } from '@/ui';

export interface PhotoListTopicHeaderProps {
  data: TopicData;
  onPress: () => void;
}

export const PhotoListTopicHeader: React.FC<PhotoListTopicHeaderProps> = (
  props,
) => {
  const { data, onPress } = props;
  const displayHeight = getHeightByScreenRatio(0.42);

  return (
    <View style={styles.container}>
      <View style={styles.blurViewContainer}>
        <Image
          source={{ uri: data.cover_photo.urls.regular }}
          style={[styles.image, { height: displayHeight }]}
        />
        <BlurView intensity={80} style={styles.blurView}>
          <Overlay>
            <View style={styles.contentContainer}>
              <Text variant="photoCardTopicTitle">{data.title}</Text>
              <View style={styles.textContainer}>
                <Text variant="photoCardTopicDesc" numberOfLines={2}>
                  {data.description}
                </Text>
                <TouchableOpacity onPress={onPress}>
                  <Text variant="photoCardTopicDesc" style={styles.moreText}>
                    더보기
                  </Text>
                </TouchableOpacity>
              </View>
              <Button size="sm" text="사진 제출" onPress={onPress} />
            </View>
          </Overlay>
        </BlurView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  blurViewContainer: {
    flex: 1,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: tokens.st.space[150],
    marginBottom: 5,
    gap: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '85%',
  },
  moreText: {
    color: tokens.st.color.white,
    marginLeft: 5,
  },
});
