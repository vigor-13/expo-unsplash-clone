import React from 'react';
import RN from 'react-native';

interface Props {
  size?: 'sm' | 'md';
  src?: string;
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
}

export const Avatar: React.FC<Props> = (props) => {
  const { size = 'md', src, containerStyle } = props;

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
        source={
          src
            ? src
            : require('../../../../assets/images/placeholder-avatars.png')
        }
      />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'red',
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
