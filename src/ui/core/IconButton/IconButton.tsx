import React from 'react';
import RN, { StyleProp, ViewStyle } from 'react-native';
import { Icon } from '@tabler/icons-react-native';
import { tokens } from '@/ui/themes';

interface Props {
  icon: Icon;
  containerStyle?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
}

export const IconButton: React.FC<Props> = (props) => {
  const { icon: Icon, containerStyle, size, color } = props;

  return (
    <RN.TouchableOpacity style={containerStyle}>
      <Icon size={size} color={color ? color : tokens.st.color.white} />
    </RN.TouchableOpacity>
  );
};
