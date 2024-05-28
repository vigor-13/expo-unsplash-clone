import React from 'react';
import RN from 'react-native';
import { Button, Text, TextInput, tokens } from '@/ui';
import { useHeader } from '@/hooks';
import { Header } from '@/components/sections/headers/Header';
import { useHandleKeyboard } from './useHandleKeyboard';
import { useHandleNavigation } from './useHandleNavigation';

export const LoginScreen: React.FC = () => {
  const { goToSignUpScreen } = useHandleNavigation();
  const {
    autoFocusInputRef,
    showKeyboardHideButton,
    renderKeyboardHideButton,
  } = useHandleKeyboard();

  useHeader({
    header: () => <Header headerLeft={() => null} title="" />,
  });

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
            placeholder="이메일"
            onFocus={showKeyboardHideButton}
          />
          <TextInput placeholder="비밀번호" onFocus={showKeyboardHideButton} />
        </RN.View>
        <Button text="로그인" size="base" style={styles.button} />
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
});
