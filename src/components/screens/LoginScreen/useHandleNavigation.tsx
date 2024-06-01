import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '@/routes/components/AuthStack';

export const useHandleNavigation = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const goToSignUpScreen = React.useCallback(() => {
    navigation.navigate('SignupScreen');
  }, [navigation]);

  return {
    goToSignUpScreen,
  };
};
