import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Animated,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { IconSearch } from '@tabler/icons-react-native';
import { tokens } from '@/ui';
import { useAnimatedSearchBar } from './useAnimatedSearchBar';
import { HeaderTextButton } from '../HeaderTextButton';

export interface SearchBarProps extends TextInputProps {
  onClose: () => void;
}

export const SearchBar = React.forwardRef<TextInput, SearchBarProps>(
  (props, ref) => {
    const { onClose, onFocus, onBlur, ...rest } = props;
    const {
      inputWidth,
      buttonOpacity,
      buttonTranslateX,
      onFocusAnimation,
      onBlurAnimation,
    } = useAnimatedSearchBar();

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocusAnimation();
      if (onFocus) onFocus(e);
    };
    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlurAnimation();
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.inputContainer, { flex: inputWidth }]}>
          <IconSearch
            style={styles.searchIcon}
            size={20}
            color={tokens.st.color.neutral[400]}
          />
          <TextInput
            ref={ref}
            placeholderTextColor={tokens.st.color.neutral[400]}
            style={styles.searchInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.dissmissButtonContainer,
            {
              opacity: buttonOpacity,
              transform: [{ translateX: buttonTranslateX }],
            },
          ]}
        >
          <HeaderTextButton text="취소" onPress={onClose} />
        </Animated.View>
      </View>
    );
  },
);
SearchBar.displayName = 'SearchBar';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: tokens.st.space['150'],
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.st.color.neutral[800],
    paddingHorizontal: tokens.st.space['100'],
    borderRadius: 6,
  },
  searchIcon: {},
  searchInput: {
    flex: 1,
    height: 36,
    color: tokens.st.color.white,
    paddingHorizontal: tokens.st.space['100'],
    fontSize: tokens.st.font.size.base,
  },
  dissmissButtonContainer: {
    justifyContent: 'center',
    marginLeft: tokens.st.space['150'],
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
