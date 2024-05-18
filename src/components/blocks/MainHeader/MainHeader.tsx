import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '@/ui';
import { Logo } from '@/components/blocks/Logo';
import { TopicListTab } from '@/components/blocks/TopicListTab';
import { tokens } from '@/ui/themes';

export const MainHeader: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.headerContainer}>
        <View style={styles.headerChild}>
          <TouchableOpacity>
            <Logo />
          </TouchableOpacity>
        </View>
        <View>
          <Text variant="headerTitle">Exsplash</Text>
        </View>
        <View style={styles.headerChild} />
      </View>
      <View>
        <TopicListTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: tokens.st.space[150],
    marginBottom: 10,
  },
  headerChild: {
    flex: 1,
  },
  topicContainer: {
    backgroundColor: 'red',
  },
});
