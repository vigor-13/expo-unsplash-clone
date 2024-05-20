import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { PhotoData } from '@/dto';
import { getHeightByScreenRatio } from '@/libs';
import { Overlay, Text, tokens } from '@/ui';

export interface PhotoListHeaderProps {
  data: PhotoData;
}

export const PhotoListHeader: React.FC<PhotoListHeaderProps> = (props) => {
  const { data } = props;
  const displayHeight = getHeightByScreenRatio(0.42);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: data.urls.regular }}
          style={[styles.image, { height: displayHeight }]}
        />
        <Overlay style={styles.overlay}>
          <View style={styles.textCenterContainer}>
            <Text variant="photoCardTitle">모두를 위한 사진</Text>
          </View>
          <View style={styles.userNameTextContainer}>
            <Text variant="photoCardUserName">{data.user.name}</Text>
          </View>
        </Overlay>
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
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%',
  },
  userNameTextContainer: {
    position: 'relative',
    bottom: tokens.st.space[200],
  },
});
