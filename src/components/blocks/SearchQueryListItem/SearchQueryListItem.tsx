import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { IconSearch, IconTrendingUp } from '@tabler/icons-react-native';
import { Text, tokens } from '@/ui';

export type SearchQueryItemType = 'search' | 'trend';

export interface SearchQueryListItemProps {
  type: SearchQueryItemType;
  query: string;
  onPress?: () => void;
}

export const SearchQueryListItem: React.FC<SearchQueryListItemProps> = (
  props,
) => {
  const { type, query, onPress } = props;

  const renderIcon = () => {
    switch (type) {
      case 'search':
        return (
          <IconSearch
            size={20}
            color={tokens.st.color.neutral[500]}
            style={styles.icon}
          />
        );
      case 'trend':
        return (
          <IconTrendingUp
            size={20}
            color={tokens.st.color.neutral[500]}
            style={styles.icon}
          />
        );
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {renderIcon()}
      <Text style={styles.text}>{query}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: tokens.st.space['150'],
    borderBottomColor: tokens.st.color.neutral['600'],
    borderBottomWidth: 0.2,
  },
  icon: {
    marginRight: tokens.st.space['150'],
  },
  text: {
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
});
