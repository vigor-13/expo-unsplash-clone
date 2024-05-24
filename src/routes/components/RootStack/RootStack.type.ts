import { StackScreenProps } from '@react-navigation/stack';
import { KeywordData } from '@/dto';

export type RootStackParamList = {
  MainTab: undefined;
  AppInfoScreen: undefined;
  PhotoScreen: { index: number };
  KeywordPhotosScreen: KeywordData;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
