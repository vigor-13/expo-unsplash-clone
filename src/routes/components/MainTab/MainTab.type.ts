import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type MainTabParamList = {
  MainScreen: undefined;
  SearchStack: undefined;
  SubmitScreen: undefined;
  AuthStack: undefined;
  MyProfileScreen: undefined;
};

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  BottomTabScreenProps<MainTabParamList, T>;
