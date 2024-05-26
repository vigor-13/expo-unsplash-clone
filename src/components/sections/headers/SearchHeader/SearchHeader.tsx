import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import { SearchBar } from '../../../blocks/SearchBar';
import { useTextInput } from '@/hooks/utils/useTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { SearchStackParamList } from '@/routes/components/SearchStack/SearchStack.type';
import { RootStackParamList } from '@/routes/components';

interface Props {
  query?: string;
}

export const SearchHeader: React.FC<Props> = (props) => {
  const { query } = props;
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<
      StackNavigationProp<SearchStackParamList & RootStackParamList>
    >();
  const route = useRoute();
  const { value, ref, dismissKeyboard, clearValue, handleValue } =
    useTextInput(query);

  const handleClose = () => {
    clearValue();
    dismissKeyboard();
    ref.current?.blur();
    navigation.navigate('SearchScreen');
  };

  const handleFocus = () => {
    navigation.navigate('SearchInputScreen');
  };

  const handleSubmit = () => {
    clearValue();
    navigation.navigate('QueryPhotosScreen', { query: value });
  };

  const handleReset = () => {
    clearValue();
    navigation.navigate('SearchInputScreen');
  };

  useFocusEffect(() => {
    if (route.name === 'SearchInputScreen') ref.current?.focus();
  });

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <SearchBar
        ref={ref}
        value={value}
        placeholder="사진, 컬렉션, 사용자 검색"
        onChange={handleValue}
        onFocus={handleFocus}
        onSubmitEditing={handleSubmit}
        reset={handleReset}
        close={handleClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
