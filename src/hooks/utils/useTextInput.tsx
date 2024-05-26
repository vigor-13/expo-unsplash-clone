import React from 'react';
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';

export const useTextInput = (initialValue?: string) => {
  const ref = React.useRef<TextInput>(null);
  const [value, setValue] = React.useState(initialValue ? initialValue : '');

  const handleValue = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text);
  };

  const clearValue = () => {
    setValue('');
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return {
    ref,
    value,
    clearValue,
    handleValue,
    dismissKeyboard,
  };
};
