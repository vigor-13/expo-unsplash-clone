import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, tokens } from '@/ui';
import { SHOW_KEYWORDS } from '@/dto';
import { PhotoList } from '@/components/blocks/PhotoList/PhotoList';
import { usePhotos } from '@/hooks/usePhotos';
import { KeywordBoxList } from '../../blocks/KeywordBoxList';

export const SearchScreen: React.FC = () => {
  const { query: photosQuery, list: photos } = usePhotos();

  return (
    <>
      <PhotoList
        data={photos}
        loading={photosQuery.status === 'pending'}
        hasNextPage={photosQuery.hasNextPage}
        numColumns={2}
        onEndReached={() => {
          photosQuery.fetchNextPage();
        }}
        ListHeaderComponent={() => (
          <View style={styles.listHeader}>
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
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    marginBottom: tokens.st.space[150],
  },
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
