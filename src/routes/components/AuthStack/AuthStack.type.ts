import { StackScreenProps } from "@react-navigation/stack";

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

export type AuthStackScreenProps<
  T extends keyof AuthStackParamList
> = StackScreenProps<AuthStackParamList, T>;
