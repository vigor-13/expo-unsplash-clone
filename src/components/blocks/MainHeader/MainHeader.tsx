import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from '@/ui';
import { Logo } from '@/components/blocks/Logo';
import { TopicListTab } from '@/components/blocks/TopicListTab';
import { tokens } from '@/ui/themes';

export const MainHeader: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#000', 'transparent']}
      start={{ x: 0, y: 0.3 }}
      end={{ x: 0, y: 1 }}
      style={[styles.container, { paddingTop: insets.top }]}
    >
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    paddingBottom: tokens.st.space[125],
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
