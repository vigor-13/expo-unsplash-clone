import { StackScreenProps } from '@react-navigation/stack';
import { KeywordData } from '@/dto';

export type RootStackParamList = {
  MainTab: undefined;
  AppInfoScreen: undefined;
  PhotoInfoScreen: { id: string };
  PhotoScreen: { index: number };
  KeywordPhotosScreen: KeywordData;
  QueryPhotosScreen: { query: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
