import { StackScreenProps } from '@react-navigation/stack';

export type SearchStackParamList = {
  SearchScreen: undefined;
  SearchInputScreen: undefined;
};

export type SearchStackScreenProps<T extends keyof SearchStackParamList> =
  StackScreenProps<SearchStackParamList, T>;
