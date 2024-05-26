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
  size?: 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'solid' | 'outline';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    style,
    children,
    text,
    textStyle,
    size = 'base',
    variant = 'solid',
    ...rest
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        size === 'sm' && styles.sm,
        size === 'base' && styles.base,
        size === 'lg' && styles.lg,
        size === 'xl' && styles.xl,
        variant === 'solid' && styles.solid,
        variant === 'outline' && styles.outline,
        style,
      ]}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Text
          style={[
            styles.text,
            variant === 'outline' && styles.outlineText,
            size === 'xl' && styles.xlText,
            textStyle,
          ]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: tokens.st.space[100],
    borderRadius: 6,
  },
  text: {
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
  xl: {
    paddingVertical: tokens.st.space[200],
  },
  xlText: {
    fontSize: tokens.st.font.size.lg,
  },
  base: {
    paddingVertical: tokens.st.space[125],
  },
  solid: {
    backgroundColor: tokens.st.color.white,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: tokens.st.color.neutral[600],
  },
  outlineText: {
    color: tokens.st.color.white,
  },
});
