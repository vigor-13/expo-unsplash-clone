import React from 'react';
import RN from 'react-native';
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
import { useSearchStore } from '@/stores';

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
  const { addRecentQuery } = useSearchStore((state) => state);
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
    if (!value) return;

    clearValue();
    navigation.navigate('QueryPhotosScreen', { query: value });
    addRecentQuery(value);
  };

  const handleReset = () => {
    clearValue();
    navigation.navigate('SearchInputScreen');
  };

  useFocusEffect(() => {
    if (route.name === 'SearchInputScreen') ref.current?.focus();
  });

  return (
    <RN.View style={[{ paddingTop: insets.top }]}>
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
    </RN.View>
  );
};
