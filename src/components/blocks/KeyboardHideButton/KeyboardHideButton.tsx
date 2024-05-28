import React from 'react';
import RN from 'react-native';
import { IconKeyboardShow } from '@tabler/icons-react-native';
import { tokens } from '@/ui';

interface Props {
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
  onPress?: () => void;
}

export const KeyboardHideButton: React.FC<Props> = (props) => {
  const { containerStyle, onPress } = props;
  return (
    <RN.TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <IconKeyboardShow size={22} color={tokens.st.color.white} />
    </RN.TouchableOpacity>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    width: 46,
    height: 46,
    borderRadius: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: tokens.st.color.neutral[800],
    paddingTop: 2,
  },
});
