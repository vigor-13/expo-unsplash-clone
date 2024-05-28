import { Text, tokens } from '@/ui';
import React from 'react';
import RN from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SimpleTextHeader: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <RN.View style={[styles.container, { marginTop: insets.top }]}>
      <Text style={styles.titleText}>
        <Text style={styles.logoText}>Unsplash</Text>에 출품
      </Text>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    paddingHorizontal: tokens.st.space[200],
    paddingTop: tokens.st.space[400],
  },
  titleText: {
    fontSize: tokens.st.font.size.xl2,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
  logoText: {
    fontSize: tokens.st.font.size.xl2,
    fontWeight: tokens.st.font.weight.black as any,
  },
});
