import React from 'react';
import RN from 'react-native';
import { IconCheck } from '@tabler/icons-react-native';
import { Text, tokens } from '@/ui';

interface Props {
  name: string;
  color?: string;
  active?: boolean;
  onPress: () => void;
}

export const FilterOptionButton: React.FC<Props> = (props) => {
  const { name, color, active, onPress } = props;

  return (
    <RN.TouchableOpacity style={styles.container} onPress={onPress}>
      <RN.View style={styles.nameContainer}>
        {color && (
          <RN.View style={[styles.color, { backgroundColor: color }]} />
        )}
        <Text style={[styles.nameText, active && styles.activeText]}>
          {name}
        </Text>
      </RN.View>
      {active && <IconCheck size={20} color={tokens.st.color.white} />}
    </RN.TouchableOpacity>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.st.space['100'],
  },
  nameText: {
    fontWeight: tokens.st.font.weight.semiBold as any,
    color: tokens.st.color.neutral[500],
  },
  activeText: {
    color: tokens.st.color.white,
  },
  color: {
    width: 22,
    height: 22,
    borderRadius: 22,
  },
});
