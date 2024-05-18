import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { tokens } from '@/ui/themes';
import { useTopicList } from '@/hooks';
import { TopicTabButton } from '@/components/blocks/TopicTabButton';
import { useTopicStore } from '@/stores';

export const TopicListTab: React.FC = () => {
  const flatListRef = React.useRef<FlatList>(null);
  const { list } = useTopicList();
  const { currentTopic, setCurrentTopic } = useTopicStore((state) => state);
  if (!currentTopic) setCurrentTopic(list[0].id);

  const scrollToItem = (index: number) => {
    if (flatListRef.current) {
      const viewPosition = 0.5;
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition,
      });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={list}
        renderItem={({ item, index }) => (
          <TopicTabButton
            text={item.title}
            active={item.id === currentTopic}
            onPress={() => {
              setCurrentTopic(item.id);
              scrollToItem(index);
            }}
          />
        )}
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
    borderBottomWidth: 0.5,
    borderColor: tokens.st.color.gray[100],
  },
  scrollContainer: {
    paddingHorizontal: tokens.st.space[150],
  },
  separator: {
    width: tokens.st.space[200],
  },
});
