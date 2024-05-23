import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ActivityIndicatorProps,
} from 'react-native';
import { tokens } from '@/ui/themes';

export interface Props extends ActivityIndicatorProps {}

export const Spinner: React.FC<Props> = (props) => {
  const { style, size, color, ...rest } = props;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        size={size ? size : 'small'}
        color={color ? color : tokens.st.color.white}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
