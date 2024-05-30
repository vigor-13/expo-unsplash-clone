import React from 'react';
import RN from 'react-native';

interface Props {
  size?: 'sm' | 'md';
  src?: string;
}

export const Avatar: React.FC<Props> = (props) => {
  const { size = 'md', src } = props;

  return (
    <RN.View style={styles.container}>
      <RN.Image
        style={[size === 'sm' && styles.sm, size === 'md' && styles.md]}
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
  },
  sm: {
    width: 26,
    height: 26,
  },
  md: {
    width: 100,
    height: 100,
  },
});
