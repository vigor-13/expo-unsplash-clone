import React from 'react';
import RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  QUERY_OPTION_SECTION,
  QueryOptionData,
  QueryOptionKeyData,
} from '@/dto';
import { useHeader } from '@/hooks';
import { Button, Divider, Text, tokens } from '@/ui';
import { FilterOptionButton } from '@/components/blocks/FilterOptionButton';
import { HeaderTextButton } from '@/components/blocks/HeaderTextButton';
import { Header } from '@/components/sections/headers/Header';
import { useSearchStore, initialQueryOption } from '@/stores';

export const QueryOptionScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { setQueryOption, queryOption } = useSearchStore((state) => state);
  const [previewOption, setPreviewOptions] = React.useState(queryOption);

  const handleResetOption = () => {
    setPreviewOptions(initialQueryOption);
  };

  const handleOption = (key: QueryOptionKeyData, value: any) => {
    const newOption: QueryOptionData = { ...previewOption };
    newOption[key] = value;
    setPreviewOptions(newOption);
  };

  const handleSaveNewQueryOption = () => {
    setQueryOption(previewOption);
    navigation.goBack();
  };

  const checkIsActive = (
    key: QueryOptionKeyData,
    value: string | undefined,
  ) => {
    return previewOption[key] === value;
  };

  useHeader({
    header: () => (
      <Header
        variant="modal"
        title="필터"
        headerLeft={() => <HeaderTextButton text="닫기" />}
        headerRight={() => (
          <HeaderTextButton text="초기화" onPress={handleResetOption} />
        )}
      />
    ),
  });

  return (
    <>
      <RN.SectionList
        sections={QUERY_OPTION_SECTION}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item.key}
        style={styles.container}
        renderItem={({ item, index }) => {
          return (
            <RN.View style={styles.sectionBody}>
              {item.list.map((option, index) => {
                return (
                  <RN.View key={`${option.name}`}>
                    {index !== 0 && <Divider style={styles.divider} />}
                    <FilterOptionButton
                      name={option.name}
                      color={option.option?.color}
                      active={checkIsActive(item.key, option.value)}
                      onPress={() => handleOption(item.key, option.value)}
                    />
                  </RN.View>
                );
              })}
            </RN.View>
          );
        }}
        renderSectionHeader={({ section }) => {
          return (
            <RN.View style={styles.sectionHeader}>
              <Text style={styles.sectionTitleText}>{section.title}</Text>
            </RN.View>
          );
        }}
        renderSectionFooter={() => <RN.View style={styles.sectionFooter} />}
      />
      <RN.View style={[styles.footer, { marginBottom: insets.bottom }]}>
        <Button
          text="필터 적용"
          size="xl"
          variant="outline"
          onPress={handleSaveNewQueryOption}
        />
      </RN.View>
    </>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: tokens.st.color.neutral[900],
    padding: tokens.st.space[200],
  },
  sectionHeader: {
    marginBottom: tokens.st.space['075'],
    paddingLeft: tokens.st.space['075'],
  },
  sectionFooter: {
    height: tokens.st.space[400],
  },
  sectionBody: {
    borderRadius: 10,
    backgroundColor: tokens.st.color.neutral[800],
    padding: tokens.st.space[200],
  },
  sectionTitleText: {
    fontSize: tokens.st.font.size.xs,
    color: tokens.st.color.neutral[500],
    fontWeight: tokens.st.font.weight.medium as any,
  },
  divider: {
    marginVertical: tokens.st.space[150],
  },
  footer: {
    borderTopWidth: 1,
    borderColor: tokens.st.color.neutral[700],
    paddingHorizontal: tokens.st.space[200],
    paddingVertical: tokens.st.space[200],
  },
});
