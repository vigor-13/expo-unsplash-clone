import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Animated,
} from 'react-native';
import { IconSearch } from '@tabler/icons-react-native';
import { tokens, Text } from '@/ui';
import { useAnimatedSearchBar } from './useAnimatedSearchBar';

export const SearchBar: React.FC = () => {
  const inputRef = useRef<TextInput>(null);
  const [searchText, setSearchText] = React.useState('');
  const { inputWidth, buttonOpacity, buttonTranslateX, onFocus, onBlur } =
    useAnimatedSearchBar();

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const dismissKeyboard = () => {
    setSearchText('');
    Keyboard.dismiss();
    inputRef.current?.blur();
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
          ref={inputRef}
          placeholder="사진, 컬렉션, 사용자 검색"
          placeholderTextColor={tokens.st.color.neutral[400]}
          value={searchText}
          style={styles.searchInput}
          onChangeText={handleSearch}
          onFocus={onFocus}
          onBlur={onBlur}
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
        <TouchableOpacity onPress={dismissKeyboard}>
          <Text variant="modalCloseText">취소</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

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
