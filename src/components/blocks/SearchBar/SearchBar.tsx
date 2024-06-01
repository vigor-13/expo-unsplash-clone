import React from 'react';
import RN from 'react-native';
import { IconSearch, IconCircleXFilled } from '@tabler/icons-react-native';
import { tokens } from '@/ui';
import { useAnimatedSearchBar } from './useAnimatedSearchBar';
import { HeaderTextButton } from '../HeaderTextButton';

export interface SearchBarProps extends RN.TextInputProps {
  close: () => void;
  reset: () => void;
}

export const SearchBar = React.forwardRef<RN.TextInput, SearchBarProps>(
  (props, ref) => {
    const { value, close, onFocus, onBlur, reset, ...rest } = props;
    const {
      inputWidth,
      buttonOpacity,
      buttonTranslateX,
      onFocusAnimation,
      onBlurAnimation,
    } = useAnimatedSearchBar();

    const handleFocus = (
      e: RN.NativeSyntheticEvent<RN.TextInputFocusEventData>,
    ) => {
      onFocusAnimation();
      if (onFocus) onFocus(e);
    };

    const handleBlur = () => {
      onBlurAnimation();
    };

    return (
      <RN.View style={styles.container}>
        <RN.Animated.View style={[styles.inputContainer, { flex: inputWidth }]}>
          <IconSearch size={20} color={tokens.st.color.neutral[400]} />
          <RN.TextInput
            ref={ref}
            value={value}
            placeholderTextColor={tokens.st.color.neutral[400]}
            style={styles.searchInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            returnKeyType="send"
            {...rest}
          />
          {value && (
            <RN.TouchableOpacity onPress={reset}>
              <IconCircleXFilled
                size={20}
                color={tokens.st.color.neutral[400]}
                fill="transparent"
              />
            </RN.TouchableOpacity>
          )}
        </RN.Animated.View>
        <RN.Animated.View
          style={[
            styles.dissmissButtonContainer,
            {
              opacity: buttonOpacity,
              transform: [{ translateX: buttonTranslateX }],
            },
          ]}
        >
          <HeaderTextButton text="취소" onPress={close} />
        </RN.Animated.View>
      </RN.View>
    );
  },
);
SearchBar.displayName = 'SearchBar';

const styles = RN.StyleSheet.create({
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
    right: tokens.st.space['200'],
    top: 20,
  },
});
