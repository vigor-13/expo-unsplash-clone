import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchBar } from '../../../blocks/SearchBar';
import { useTextInput } from '@/hooks/utils/useTextInput';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SearchStackParamList } from '@/routes/components/SearchStack/SearchStack.type';

export const SearchHeader: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<SearchStackParamList>>();
  const route = useRoute();
  const { value, ref, dismissKeyboard, clearValue, handleValue } =
    useTextInput();

  const handleClose = () => {
    clearValue();
    dismissKeyboard();
    ref.current?.blur();
    navigation.navigate('SearchScreen');
  };

  const handleFocus = () => {
    navigation.navigate('SearchInputScreen');
  };

  React.useEffect(() => {
    if (route.name === 'SearchInputScreen') ref.current?.focus();
  }, [route, ref]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <SearchBar
        ref={ref}
        value={value}
        placeholder="사진, 컬렉션, 사용자 검색"
        onClose={handleClose}
        onChange={handleValue}
        onFocus={handleFocus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
