import React from 'react';
import { StyleSheet, ViewProps, View } from 'react-native';

export interface OverlayProps extends ViewProps {}

export const Overlay: React.FC<OverlayProps> = (props) => {
  const { children, style } = props;

  return <View style={[styles.container, style]}>{children}</View>;
};

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, 0.6)',
    flex: 1,
  },
});
