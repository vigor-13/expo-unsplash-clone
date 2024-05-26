import React from 'react';
import RN from 'react-native';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react-native';
import { tokens } from '@/ui';

interface Props extends RN.TouchableOpacityProps {}

export const FilterButton: React.FC<Props> = (props) => {
  const { style, ...rest } = props;

  return (
    <RN.TouchableOpacity style={[styles.container, style]} {...rest}>
      <IconAdjustmentsHorizontal color={tokens.st.color.white} size={24} />
    </RN.TouchableOpacity>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: tokens.st.color.neutral[900],
    padding: tokens.st.space['125'],
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
