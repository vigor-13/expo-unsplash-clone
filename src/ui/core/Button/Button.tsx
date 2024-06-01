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
import { Spinner } from '../Spinner';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'solid' | 'outline';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    style,
    children,
    text,
    textStyle,
    size = 'base',
    variant = 'solid',
    loading,
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
      ) : loading ? (
        <Spinner color={tokens.st.color.black} />
      ) : (
        <Text
          style={[
            styles.text,
            variant === 'outline' && styles.outlineText,
            size === 'sm' && styles.smText,
            size === 'lg' && styles.lgText,
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
    fontSize: tokens.st.font.size.base,
    color: tokens.st.color.black,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
  sm: {
    height: 30,
  },
  base: {
    height: 40,
  },
  lg: {
    height: 50,
  },
  xl: {
    height: 55,
  },
  smText: {
    fontSize: tokens.st.font.size.sm,
  },
  lgText: {
    fontSize: tokens.st.font.size.lg,
  },
  xlText: {
    fontSize: tokens.st.font.size.lg,
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
