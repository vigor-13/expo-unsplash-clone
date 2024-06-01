import React from 'react';
import RN from 'react-native';
import { useLogin } from '@/hooks';
import { useIsFocused } from '@react-navigation/native';

export const useHandleLogin = () => {
  const isFocussed = useIsFocused();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const { mutation } = useLogin();

  const handleEmailValue = React.useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handlePasswordValue = React.useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleLogin = React.useCallback(() => {
    mutation.mutate({ email, password });
  }, [email, password, mutation]);

  const reset = React.useCallback(() => {
    setEmail('');
    setPassword('');
    setErrorMessage('');
  }, []);

  React.useEffect(() => {
    if (mutation.data && mutation.data.error) {
      setErrorMessage(mutation.data.error.message);
    }
  }, [mutation.data]);

  React.useEffect(() => {
    if (!isFocussed) reset();
  }, [isFocussed, reset]);

  return {
    mutation,
    email,
    password,
    errorMessage,
    handleEmailValue,
    handlePasswordValue,
    handleLogin,
  };
};
