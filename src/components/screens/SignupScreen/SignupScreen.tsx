import React from 'react';
import RN from 'react-native';
import { useHeader } from '@/hooks';
import { Header } from '@/components/sections/headers/Header';
import { Button, TextInput, tokens, Text } from '@/ui';
import { useHandleKeyboard } from './useHandleKeyboard';

export const SignupScreen: React.FC = () => {
  const { autoFocusInputRef } = useHandleKeyboard();

  useHeader({
    header: () => <Header />,
  });

  return (
    <RN.KeyboardAvoidingView
      style={styles.container}
      behavior={RN.Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={120}
    >
      <RN.ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.titleText}>
          <Text style={[styles.titleText, styles.logoText]}>Unsplash </Text>
          가입
        </Text>
        <RN.View style={styles.inputContainer}>
          <TextInput placeholder="성" />
          <TextInput placeholder="이름" ref={autoFocusInputRef} />
          <TextInput placeholder="사용자 이름" />
          <TextInput placeholder="이메일" />
          <TextInput placeholder="암호" />
        </RN.View>
        <Button text="등록" style={styles.button} />
        <RN.View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            가입하는 경우, 귀하는 이용약관 및 개인정보 취급방침에 {'\n'}
            동의하는 것입니다.
          </Text>
        </RN.View>
      </RN.ScrollView>
    </RN.KeyboardAvoidingView>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    padding: tokens.st.space[200],
  },
  inputContainer: {
    marginTop: tokens.st.space[400],
    gap: tokens.st.space[300],
  },
  termsContainer: {
    marginTop: tokens.st.space[200],
  },
  button: {
    marginTop: tokens.st.space[300],
  },
  titleText: {
    fontSize: tokens.st.font.size.xl4,
    lineHeight: tokens.st.font.size.xl4,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
  logoText: {
    fontWeight: tokens.st.font.weight.black as any,
  },
  termsText: {
    color: tokens.st.color.neutral[400],
    fontSize: tokens.st.font.size.xs,
    textAlign: 'center',
  },
});
