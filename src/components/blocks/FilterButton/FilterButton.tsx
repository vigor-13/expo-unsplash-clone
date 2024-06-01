import React from 'react';
import RN from 'react-native';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react-native';
import { tokens } from '@/ui';

interface Props extends RN.TouchableOpacityProps {
  active?: boolean;
}

export const FilterButton: React.FC<Props> = (props) => {
  const { style, active, ...rest } = props;

  return (
    <RN.TouchableOpacity style={[styles.container, style]} {...rest}>
      <IconAdjustmentsHorizontal color={tokens.st.color.white} size={24} />
      {active && <RN.View style={styles.active} />}
    </RN.TouchableOpacity>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    position: 'relative',
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
  active: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: tokens.st.color.red[500],
    position: 'absolute',
    left: 8,
    top: 12,
  },
});
