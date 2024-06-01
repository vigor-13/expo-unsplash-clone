import React from 'react';
import { LoginScreen } from '../LoginScreen';
import { useAuthStore } from '@/stores';
import { useNavigation } from '@react-navigation/native';

export const LoginModalScreen: React.FC = () => {
  const navigation = useNavigation();
  const { session } = useAuthStore((state) => state);

  React.useEffect(() => {
    if (session) {
      navigation.goBack();
    }
  }, [navigation, session]);

  return <LoginScreen />;
};
