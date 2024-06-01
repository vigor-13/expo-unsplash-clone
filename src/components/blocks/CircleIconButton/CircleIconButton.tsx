import React from 'react';
import RN from 'react-native';
import {
  IconHeartFilled,
  IconPlus,
  IconArrowDown,
} from '@tabler/icons-react-native';
import { tokens } from '@/ui';

interface Props {
  iconName: 'IconHeartFilled' | 'IconPlus' | 'IconArrowDown';
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  active?: boolean;
}

export const CircleIconButton: React.FC<Props> = (props) => {
  const { iconName, onPress, variant = 'primary', active } = props;
  let color =
    variant === 'primary' ? tokens.st.color.white : tokens.st.color.black;
  if (active) color = tokens.st.color.red[600];

  const bgColor =
    variant === 'primary' ? tokens.st.color.black : tokens.st.color.white;

  const renderIcon = () => {
    switch (iconName) {
      case 'IconArrowDown':
        return <IconArrowDown color={color} size={26} />;
      case 'IconPlus':
        return <IconPlus color={color} size={26} />;
      case 'IconHeartFilled':
        return <IconHeartFilled color={color} fill={color} size={22} />;
    }
  };

  return (
    <RN.TouchableOpacity
      style={[styles.container, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      {renderIcon()}
    </RN.TouchableOpacity>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  primary: {
    color: tokens.st.color.white,
  },
});
