import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Logo } from '@/components/blocks/Logo';
import { LinkButton } from '@/components/blocks/LinkButton';
import { Text, tokens, Divider } from '@/ui';
import { useApplication } from '@/hooks';

export const AppInfoScreen: React.FC = () => {
  const { applicationName, applicationVersion, nativeBuildVersion } =
    useApplication();

  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.appInfo]}>
        <Logo size={34} />
        <Text variant="headerTitle">{applicationName}</Text>
        <Text variant="info" style={styles.versionText}>
          {`v${applicationVersion} (${nativeBuildVersion})`}
        </Text>
      </View>
      <View style={[styles.section]}>
        <LinkButton text="Unsplash 추천" url="" />
        <Divider />
        <LinkButton text="리뷰 작성" url="" />
        <Divider />
        <LinkButton text="Thinkstock에 의견 보내기" url="" />
      </View>
      <View style={[styles.section]}>
        <LinkButton text="unsplash.com 방문" url="https://unsplash.com/ko" />
        <Divider />
        <LinkButton text="라이선스" url="https://unsplash.com/ko/라이선스" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
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
