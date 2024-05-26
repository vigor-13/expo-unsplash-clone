import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { PhotoData } from '@/dto';
import { getDisplayHeight } from '@/libs';
import { tokens } from '@/ui/themes';
import { Text, Image } from '@/ui';

export interface Props {
  data: PhotoData;
  cols?: number;
  onPress?: () => void;
}

export const PhotoCard: React.FC<Props> = (props) => {
  const { data, cols = 1, onPress } = props;
  const displayHeight = getDisplayHeight({
    width: data.width,
    height: data.height,
    cols,
  });

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={data.urls.regular}
        placeholder={{ blurhash: data.blur_hash }}
        contentFit="cover"
        transition={300}
        style={[
          styles.image,
          {
            height: displayHeight,
          },
        ]}
      />
      <View style={styles.overlay}>
        <View style={styles.nameContainer}>
          <Text variant="photoCardUserName">{data.user.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  nameContainer: {
    position: 'absolute',
    left: tokens.st.space[150],
    bottom: tokens.st.space[150],
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
