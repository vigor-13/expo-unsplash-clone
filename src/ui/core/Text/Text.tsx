import React from 'react';
import {
  Text as RawText,
  TextProps as RawTextProps,
  StyleSheet,
} from 'react-native';
import { tokens } from '@/ui/themes';

export interface TextProps extends RawTextProps {
  variant?: 'headerTitle' | 'tabItem';
}

export const Text: React.FC<TextProps> = (props) => {
  const { variant, style, ...rest } = props;

  return (
    <RawText
      style={[
        styles.common,
        variant === 'headerTitle' && styles.headerTitle,
        variant === 'tabItem' && styles.tabItem,
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  common: {
    color: tokens.st.color.white,
    fontFamily: tokens.st.font.family.pretendard,
    fontSize: tokens.st.font.size.base,
    fontWeight: tokens.st.font.weight.regular as any,
  },
  headerTitle: {
    fontSize: tokens.st.font.size.xl,
    fontWeight: tokens.st.font.weight.bold as any,
  },
  tabItem: {
    fontSize: tokens.st.font.size.sm,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
});
