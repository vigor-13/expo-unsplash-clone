import React from 'react';
import RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardHideButton } from '@/components/blocks/KeyboardHideButton';
import { tokens } from '@/ui';

export const useHandleKeyboard = () => {
  const navigation = useNavigation();
  const autoFocusInputRef = React.useRef<RN.TextInput>(null);
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  const dismissKeyboard = React.useCallback(() => {
    RN.Keyboard.dismiss();
    setKeyboardVisible(false);
  }, []);

  const showKeyboardHideButton = React.useCallback(() => {
    setKeyboardVisible(true);
  }, [setKeyboardVisible]);

  const renderKeyboardHideButton = () => {
    return (
      isKeyboardVisible && (
        <KeyboardHideButton
          containerStyle={[styles.keyboardHideButton]}
          onPress={dismissKeyboard}
        />
      )
    );
  };

  React.useEffect(() => {
    const focusInput = () => {
      if (autoFocusInputRef.current) autoFocusInputRef.current.focus();
    };

    const unsubscribe = navigation.addListener('focus', focusInput);
    return () => unsubscribe();
  }, [navigation]);

  return {
    autoFocusInputRef,
    showKeyboardHideButton,
    renderKeyboardHideButton,
  };
};

const styles = RN.StyleSheet.create({
  keyboardHideButton: {
    position: 'absolute',
    right: tokens.st.space[200],
    bottom: tokens.st.space[200],
  },
});
