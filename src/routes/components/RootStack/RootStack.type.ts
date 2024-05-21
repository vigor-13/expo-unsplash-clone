import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  MainTab: undefined;
  AppInfoScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
