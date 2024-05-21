import { tokens } from '@/ui/themes';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Divider: React.FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0.6,
    backgroundColor: tokens.st.color.neutral[700],
  },
});
