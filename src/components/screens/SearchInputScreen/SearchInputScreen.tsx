import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SearchQueryList } from '@/components/blocks/SearchQueryList';
import { Text, tokens } from '@/ui';
import { HeaderTextButton } from '@/components/blocks/HeaderTextButton';
import { useHeader } from '@/hooks';
import { SearchHeader } from '@/components/sections/headers/SearchHeader';
import { useSearchStore } from '@/stores';
import { DUMMY_TREND_QUERIES } from '@/dto';

export const SearchInputScreen: React.FC = () => {
  useHeader({
    header: () => <SearchHeader />,
  });

  const { recentQueries, clearRecentQuery } = useSearchStore((state) => state);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={120}
      style={styles.container}
    >
      <ScrollView keyboardShouldPersistTaps="always">
        {recentQueries.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text variant="sectionTitle">최신</Text>
              <HeaderTextButton text="삭제" onPress={clearRecentQuery} />
            </View>
            <SearchQueryList
              data={recentQueries}
              containerStyle={styles.queryList}
              type="search"
            />
          </View>
        )}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text variant="sectionTitle">최신 경향</Text>
          </View>
          <SearchQueryList
            data={DUMMY_TREND_QUERIES}
            containerStyle={styles.queryList}
            type="trend"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingHorizontal: tokens.st.space[200],
    marginTop: tokens.st.space[400],
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  queryList: {
    marginTop: tokens.st.space['150'],
  },
});
