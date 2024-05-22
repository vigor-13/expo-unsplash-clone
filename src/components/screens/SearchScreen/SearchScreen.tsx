import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, tokens } from '@/ui';
import { SearchHeader } from '../../blocks/SearchHeader';
import { KeywordBoxList } from '../../blocks/KeywordBoxList';
import { SHOW_KEYWORDS } from '@/dto';

export const SearchScreen: React.FC = () => {
  return (
    <>
      <SearchHeader />
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text variant="sectionTitle">범주별 찾아보기</Text>
          <KeywordBoxList
            containerStyle={styles.keywordBoxList}
            data={SHOW_KEYWORDS}
          />
        </View>
        <View style={styles.section}>
          <Text variant="sectionTitle">Discover</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: tokens.st.space[200],
  },
  section: {
    marginTop: tokens.st.space[400],
  },
  keywordBoxList: {
    marginTop: tokens.st.space[150],
  },
});
