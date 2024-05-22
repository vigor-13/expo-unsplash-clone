import React from 'react';
import { StyleSheet, ViewProps, View } from 'react-native';

export interface OverlayProps extends ViewProps {
  opacity?: number;
}

export const Overlay: React.FC<OverlayProps> = (props) => {
  const { children, opacity = 0.6, style } = props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: `rgba(0,0,0, ${opacity ? opacity : 0.6})`,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
});
