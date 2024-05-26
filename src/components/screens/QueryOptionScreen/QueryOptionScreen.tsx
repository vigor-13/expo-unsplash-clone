import React from 'react';
import RN from 'react-native';
import { QUERY_OPTION_DATA } from '@/dto';
import { useHeader } from '@/hooks';
import { Button, Divider, Text, tokens } from '@/ui';
import { FilterOptionButton } from '@/components/blocks/FilterOptionButton';
import { HeaderTextButton } from '@/components/blocks/HeaderTextButton';
import { Header } from '@/components/sections/headers/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export const QueryOptionScreen: React.FC = () => {
  useHeader({
    header: () => (
      <Header
        variant="modal"
        title="필터"
        headerLeft={() => <HeaderTextButton text="닫기" />}
        headerRight={() => <HeaderTextButton text="초기화" />}
      />
    ),
  });

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <>
      <RN.SectionList
        sections={QUERY_OPTION_DATA}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        style={styles.container}
        renderItem={({ item, index }) => {
          return (
            <RN.View style={styles.sectionBody}>
              {item.list.map((option, index) => {
                return (
                  <>
                    {index !== 0 && <Divider style={styles.divider} />}
                    <FilterOptionButton
                      key={`${option.name}`}
                      name={option.name}
                      active={option.active}
                      color={option.color}
                    />
                  </>
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
          onPress={handlePress}
        />
      </RN.View>
    </>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.st.color.neutral[900],
    padding: tokens.st.space[200],
    position: 'relative',
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
    paddingTop: tokens.st.space[200],
  },
});
