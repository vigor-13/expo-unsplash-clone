import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { tokens } from '@/ui/themes';
import { useTopics, useFlatListScroll } from '@/hooks';
import { TopicTabButton } from '@/components/blocks/TopicTabButton';

export const TopicListTab: React.FC = () => {
  const { list: topics, activeTopic, setActiveTopic } = useTopics();
  const { flatListRef, scrollToItem } = useFlatListScroll();

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={topics}
        renderItem={({ item, index }) => (
          <TopicTabButton
            text={item.title}
            active={item.id === activeTopic?.id}
            onPress={() => {
              setActiveTopic(item);
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
