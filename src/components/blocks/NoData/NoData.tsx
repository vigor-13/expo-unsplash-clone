import { Text, tokens } from '@/ui';
import React from 'react';
import RN from 'react-native';

export const NoData: React.FC = () => {
  return (
    <RN.View style={styles.container}>
      <Text style={styles.text}>데이터 없음</Text>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: tokens.st.color.neutral[600],
    fontWeight: tokens.st.font.weight.light as any,
  },
});
