import { tokens } from '@/ui/themes';
import React from 'react';
import RN from 'react-native';

interface Props extends RN.TextInputProps {}

export const TextInput = React.forwardRef<RN.TextInput, Props>((props, ref) => {
  const { onFocus, onBlur, ...rest } = props;
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = React.useCallback(
    (e: RN.NativeSyntheticEvent<RN.TextInputFocusEventData>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    },
    [onFocus],
  );

  const handleBlur = React.useCallback(
    (e: RN.NativeSyntheticEvent<RN.TextInputFocusEventData>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    },
    [onBlur],
  );

  return (
    <RN.TextInput
      ref={ref}
      placeholderTextColor={
        isFocused ? tokens.st.color.white : tokens.st.color.neutral[400]
      }
      style={[styles.textInput, isFocused && styles.active]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
});
TextInput.displayName = 'TextInput';

const styles = RN.StyleSheet.create({
  textInput: {
    color: tokens.st.color.white,
    borderBottomWidth: 1,
    borderColor: tokens.st.color.neutral[400],
    paddingVertical: tokens.st.space['100'],
  },
  active: {
    borderColor: tokens.st.color.white,
  },
});
