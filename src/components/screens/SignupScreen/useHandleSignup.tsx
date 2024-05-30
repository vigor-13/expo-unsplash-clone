import React from 'react';
import RN from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { signupFormSchema } from '@/libs';
import { useSignup } from '@/hooks';

export const useHandleSignup = () => {
  const navigation = useNavigation();
  const isFocussed = useIsFocused();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const { mutation } = useSignup();

  const handleFirstNameValue = React.useCallback((text: string) => {
    setFirstName(text);
  }, []);
  const handleLastNameValue = React.useCallback((text: string) => {
    setLastName(text);
  }, []);
  const handleNameValue = React.useCallback((text: string) => {
    setName(text);
  }, []);
  const handleEmailValue = React.useCallback((text: string) => {
    setEmail(text);
  }, []);
  const handlePasswordValue = React.useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleSignup = () => {
    const validatedData = signupFormSchema.safeParse({
      firstName,
      lastName,
      name,
      email,
      password,
    });
    if (!validatedData.success) {
      const errors = validatedData.error.flatten().fieldErrors;
      if (errors.firstName) return setErrorMessage(errors.firstName[0]);
      if (errors.lastName) return setErrorMessage(errors.lastName[0]);
      if (errors.name) return setErrorMessage(errors.name[0]);
      if (errors.email) return setErrorMessage(errors.email[0]);
      if (errors.password) return setErrorMessage(errors.password[0]);
    }
    mutation.mutate({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          name,
        },
      },
    });
  };

  const reset = React.useCallback(() => {
    setFirstName('');
    setLastName('');
    setName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
  }, []);

  React.useEffect(() => {
    if (!mutation.data) return;
    if (mutation.data.error)
      return setErrorMessage(mutation.data.error.message);

    if (!mutation.data.data.session) {
      RN.Alert.alert('이메일 인증을 위해 이메일 편지함을 확인해 주세요.');
      navigation.goBack();
    }
  }, [mutation.data, reset, navigation]);

  React.useEffect(() => {
    if (!isFocussed) reset();
  }, [isFocussed, reset]);

  return {
    mutation,
    firstName,
    lastName,
    name,
    email,
    password,
    errorMessage,
    handleFirstNameValue,
    handleLastNameValue,
    handleNameValue,
    handleEmailValue,
    handlePasswordValue,
    handleSignup,
  };
};
