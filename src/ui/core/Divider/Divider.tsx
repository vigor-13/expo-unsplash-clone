import { tokens } from '@/ui/themes';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

interface Props extends ViewProps {}

export const Divider: React.FC<Props> = (props) => {
  const { style } = props;
  return <View style={[styles.container, style]} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0.6,
    backgroundColor: tokens.st.color.neutral[700],
  },
});
