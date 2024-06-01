import React from 'react';
import RN from 'react-native';
import { PhotoData } from '@/dto';
import { getDisplayHeight } from '@/libs';
import { tokens } from '@/ui/themes';
import { Text, Image, Overlay } from '@/ui';

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
    <RN.Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: data.urls.regular,
        }}
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
      <Overlay opacity={0.2}>
        <RN.View style={styles.nameContainer}>
          <Text variant="photoCardUserName" numberOfLines={1}>
            {data.user.name}
          </Text>
        </RN.View>
      </Overlay>
    </RN.Pressable>
  );
};

const styles = RN.StyleSheet.create({
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
    left: 0,
    bottom: 0,
    width: '100%',
    paddingHorizontal: tokens.st.space[150],
    paddingBottom: tokens.st.space[150],
  },
});
