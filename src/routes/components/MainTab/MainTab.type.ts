import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type MainTabParamList = {
  MainScreen: undefined;
  SearchScreen: undefined;
  SubmitScreen: undefined;
  AuthStack: undefined;
};

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  BottomTabScreenProps<MainTabParamList, T>;
