import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '@/ui';
import { Logo } from '@/components';
import { tokens } from '@/ui/themes';

export const MainHeader: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
        <View style={styles.headerSide}>
          <TouchableOpacity>
            <Logo />
          </TouchableOpacity>
        </View>
        <View>
          <Text variant="headerTitle">Exsplash</Text>
        </View>
        <View style={styles.headerSide} />
      </View>
      <View style={styles.topicContainer}>{/* Topic List */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: tokens.st.space[150],
    paddingTop: tokens.st.space[150],
    borderBottomWidth: 0.2,
    borderColor: tokens.st.color.gray[100],
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerSide: {
    flex: 1,
  },
  topicContainer: {
    marginTop: tokens.st.space[200],
  },
});
