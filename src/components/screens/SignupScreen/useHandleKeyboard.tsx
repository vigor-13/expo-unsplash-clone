import { useNavigation } from '@react-navigation/native';
import React from 'react';
import RN from 'react-native';

export const useHandleKeyboard = () => {
  const navigation = useNavigation();
  const autoFocusInputRef = React.useRef<RN.TextInput>(null);

  React.useEffect(() => {
    const focusInput = () => {
      if (autoFocusInputRef.current) {
        if (RN.Platform.OS === 'android') RN.Keyboard.dismiss();
        autoFocusInputRef.current.focus();
      }
    };

    const unsubscribe = navigation.addListener('focus', focusInput);
    return () => unsubscribe();
  }, [navigation]);

  return { autoFocusInputRef };
};
