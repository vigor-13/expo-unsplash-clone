import React from 'react';
import RN from 'react-native';
import { useHeader } from '@/hooks';
import { Header } from '@/components/sections/headers/Header';
import { Button, TextInput, tokens, Text } from '@/ui';
import { useHandleKeyboard } from './useHandleKeyboard';
import { useHandleSignup } from './useHandleSignup';

export const SignupScreen: React.FC = () => {
  const { autoFocusInputRef } = useHandleKeyboard();
  const {
    mutation,
    firstName,
    lastName,
    name,
    email,
    password,
    errorMessage,
    handleFirstNameValue,
    handleLastNameValue,
    handleNameValue,
    handleEmailValue,
    handlePasswordValue,
    handleSignup,
  } = useHandleSignup();

  useHeader({
    header: () => <Header />,
  });

  // TODO:
  if (mutation.isError) return;

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
          <TextInput
            value={firstName}
            placeholder="성"
            onChangeText={handleFirstNameValue}
          />
          <TextInput
            value={lastName}
            placeholder="이름"
            ref={autoFocusInputRef}
            onChangeText={handleLastNameValue}
          />
          <TextInput
            value={name}
            placeholder="사용자 이름"
            onChangeText={handleNameValue}
          />
          <TextInput
            value={email}
            placeholder="이메일"
            onChangeText={handleEmailValue}
          />
          <TextInput
            value={password}
            placeholder="암호"
            textContentType="password"
            secureTextEntry
            onChangeText={handlePasswordValue}
          />
        </RN.View>
        {errorMessage && (
          <RN.View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessageText}>{errorMessage}</Text>
          </RN.View>
        )}
        <Button
          text="등록"
          style={styles.button}
          onPress={handleSignup}
          loading={mutation.isPending}
          disabled={mutation.isPending}
        />
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
  errorMessageContainer: {
    marginTop: tokens.st.space[300],
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
  errorMessageText: {
    textAlign: 'center',
    color: tokens.st.color.red[500],
  },
});
