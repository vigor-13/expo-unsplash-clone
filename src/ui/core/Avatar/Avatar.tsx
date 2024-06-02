import React from 'react';
import RN from 'react-native';
import { useAssets } from 'expo-asset';
import { placeholderAvatar } from '@/assets';

interface Props {
  size?: 'sm' | 'md';
  src?: string;
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
}

export const Avatar: React.FC<Props> = (props) => {
  const { size = 'md', src, containerStyle } = props;
  const [assets] = useAssets([placeholderAvatar]);

  if (!assets) return null;

  return (
    <RN.View
      style={[
        styles.container,
        size === 'sm' && styles.sm,
        size === 'md' && styles.md,
        containerStyle,
      ]}
    >
      <RN.Image
        style={styles.image}
        source={{
          uri: src ? src : assets[0].uri,
        }}
      />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    borderRadius: 100,
    overflow: 'hidden',
  },
  sm: {
    width: 26,
    height: 26,
  },
  md: {
    width: 60,
    height: 60,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
