import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SearchQueryList } from '@/components/blocks/SearchQueryList';
import { Text, tokens } from '@/ui';

export const SearchInputScreen: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={120}
      style={styles.container}
    >
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text variant="sectionTitle">최신</Text>
            <TouchableOpacity>
              <Text variant="modalCloseText">삭제</Text>
            </TouchableOpacity>
          </View>
          <SearchQueryList containerStyle={styles.queryList} type="search" />
        </View>
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text variant="sectionTitle">최신 경향</Text>
          </View>
          <SearchQueryList containerStyle={styles.queryList} type="trend" />
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
