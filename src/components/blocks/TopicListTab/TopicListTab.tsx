import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { Text, tokens } from '@/ui';
import { useTopicList } from '@/hooks';

export const TopicListTab: React.FC = () => {
  const { list } = useTopicList();

  const renderButton = ({ item: topic }: any) => {
    return (
      <TouchableWithoutFeedback key={topic.id}>
        <Text variant="tabItem">{topic.title}</Text>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderButton}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.3,
    borderColor: tokens.st.color.gray[100],
  },
  scrollContainer: {
    paddingHorizontal: tokens.st.space[150],
    paddingBottom: tokens.st.space[150],
  },
  separator: {
    width: tokens.st.space[200],
  },
});
