import React from 'react';
import RN from 'react-native';
import { Logo } from '@/components/blocks/Logo';
import { LinkButton } from '@/components/blocks/LinkButton';
import { Text, tokens, Divider } from '@/ui';
import { useApplication, useHeader } from '@/hooks';
import { Header } from '@/components/sections/headers/Header';
import { HeaderTextButton } from '@/components/blocks/HeaderTextButton';

export const AppInfoScreen: React.FC = () => {
  useHeader({
    header: () => (
      <Header
        variant="modal"
        headerLeft={() => null}
        headerRight={() => <HeaderTextButton text="완료" />}
      />
    ),
  });

  const { applicationName, applicationVersion, nativeBuildVersion } =
    useApplication();

  return (
    <RN.View style={styles.container}>
      <RN.View style={[styles.section, styles.appInfo]}>
        <Logo size={34} />
        <Text variant="headerTitle">{applicationName}</Text>
        <Text variant="info" style={styles.versionText}>
          {`v${applicationVersion} (${nativeBuildVersion})`}
        </Text>
      </RN.View>
      <RN.View style={[styles.section]}>
        <LinkButton text="Unsplash 추천" url="" />
        <Divider />
        <LinkButton text="리뷰 작성" url="" />
        <Divider />
        <LinkButton text="Thinkstock에 의견 보내기" url="" />
      </RN.View>
      <RN.View style={[styles.section]}>
        <LinkButton text="unsplash.com 방문" url="https://unsplash.com/ko" />
        <Divider />
        <LinkButton text="라이선스" url="https://unsplash.com/ko/라이선스" />
      </RN.View>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: { flex: 1, backgroundColor: tokens.st.color.neutral[900] },
  section: {
    marginTop: tokens.st.space[400],
    backgroundColor: tokens.st.color.neutral[800],
  },
  appInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: tokens.st.space[300],
  },
  versionText: {
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
  button: {},
});
