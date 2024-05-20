import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { tokens } from '@/ui/themes';
import { Text } from '../Text';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  size?: 'sm' | 'base' | 'lg';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { style, children, text, textStyle, size = 'base', ...rest } = props;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        size === 'sm' && styles.sm,
        size === 'base' && styles.base,
        size === 'lg' && styles.lg,
        style,
      ]}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: tokens.st.color.white,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: tokens.st.space[100],
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    fontSize: tokens.st.font.size.sm,
    color: tokens.st.color.black,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
  sm: {
    paddingVertical: tokens.st.space['075'],
  },
  lg: {
    paddingVertical: tokens.st.space[100],
  },
  base: {
    paddingVertical: tokens.st.space[125],
  },
});
