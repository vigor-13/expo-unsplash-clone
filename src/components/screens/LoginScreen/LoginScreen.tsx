import React from 'react';
import RN from 'react-native';
import { Button, Text, TextInput, tokens } from '@/ui';
import { useHeader } from '@/hooks';
import { Header } from '@/components/sections/headers/Header';
import { useHandleKeyboard } from './useHandleKeyboard';
import { useHandleNavigation } from './useHandleNavigation';
import { useHandleLogin } from './useHandleLogin';

export const LoginScreen: React.FC = () => {
  const { goToSignUpScreen } = useHandleNavigation();
  const {
    autoFocusInputRef,
    showKeyboardHideButton,
    renderKeyboardHideButton,
  } = useHandleKeyboard();
  const {
    mutation,
    email,
    password,
    errorMessage,
    handleEmailValue,
    handlePasswordValue,
    handleLogin,
  } = useHandleLogin();

  useHeader({
    header: () => <Header headerLeft={() => null} title="" />,
  });

  // TODO:
  if (mutation.isError) return;

  return (
    <RN.KeyboardAvoidingView
      style={styles.container}
      behavior={RN.Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <RN.View style={styles.contentContainer}>
        <Text style={styles.titleText}>로그인</Text>
        <RN.View style={styles.inputContainer}>
          <TextInput
            ref={autoFocusInputRef}
            value={email}
            placeholder="이메일"
            onFocus={showKeyboardHideButton}
            onChangeText={handleEmailValue}
          />
          <TextInput
            value={password}
            placeholder="비밀번호"
            textContentType="password"
            secureTextEntry
            onFocus={showKeyboardHideButton}
            onChangeText={handlePasswordValue}
          />
        </RN.View>
        {errorMessage && (
          <RN.View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessageText}>{errorMessage}</Text>
          </RN.View>
        )}
        <Button
          text="로그인"
          style={styles.button}
          onPress={handleLogin}
          loading={mutation.isPending}
          disabled={mutation.isPending}
        />
        <RN.View style={styles.signUpLinkButtonContainer}>
          <RN.TouchableOpacity onPress={goToSignUpScreen}>
            <Text style={styles.signUpLinkText}>계정이 없으세요? 가입</Text>
          </RN.TouchableOpacity>
        </RN.View>
        {renderKeyboardHideButton()}
      </RN.View>
    </RN.KeyboardAvoidingView>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
    padding: tokens.st.space[200],
  },
  titleText: {
    fontSize: tokens.st.font.size.xl4,
    lineHeight: tokens.st.font.size.xl4,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
  inputContainer: {
    marginTop: tokens.st.space[400],
    gap: tokens.st.space[300],
  },
  errorMessageContainer: {
    marginTop: tokens.st.space[300],
  },
  button: {
    marginTop: tokens.st.space[300],
  },
  signUpLinkButtonContainer: {
    marginTop: tokens.st.space[500],
    alignItems: 'center',
  },
  signUpLinkText: {
    fontWeight: tokens.st.font.weight.medium as any,
  },
  errorMessageText: {
    textAlign: 'center',
    color: tokens.st.color.red[500],
  },
});
