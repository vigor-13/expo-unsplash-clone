import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { PhotoData } from '@/dto';
import { getDisplayHeight } from '@/libs';
import { tokens } from '@/ui/themes';
import { Text } from '@/ui';

export interface PhotoCardProps {
  data: PhotoData;
}

export const PhotoCard: React.FC<PhotoCardProps> = (props) => {
  const { data } = props;
  const displayHeight = getDisplayHeight({
    width: data.width,
    height: data.height,
  });

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.urls.regular }}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
