import { StackScreenProps } from '@react-navigation/stack';
import { KeywordData } from '@/dto';

export type RootStackParamList = {
  MainTab: undefined;
  KeywordPhotosScreen: KeywordData;
  AppInfoScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
