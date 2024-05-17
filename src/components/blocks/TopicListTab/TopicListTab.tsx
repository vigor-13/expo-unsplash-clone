import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getTopicOptions } from '@/services/query';
import { Text, tokens } from '@/ui';

export const TopicListTab: React.FC = () => {
  const query = useQuery(getTopicOptions());

  const renderButton = ({ item: topic }: any) => {
    return (
      <TouchableWithoutFeedback key={topic.id}>
        <Text
          variant="tabItem"
          style={{
            color: tokens.st.color.gray[100],
          }}
        >
          {topic.title}
        </Text>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={query.data}
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
    borderBottomWidth: 0.2,
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
