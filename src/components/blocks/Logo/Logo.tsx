import React from 'react';
import { IconBrandUnsplash } from '@tabler/icons-react-native';
import { tokens } from '@/ui/themes';
import { StyleProp, ViewStyle } from 'react-native';

export interface LogoProps {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export const Logo: React.FC<LogoProps> = (props) => {
  const { color, size, style } = props;
  return (
    <IconBrandUnsplash
      style={style}
      color={color ? color : tokens.st.color.white}
      size={size ? size : 30}
    />
  );
};
