import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface Props {
  header: () => React.ReactNode;
}

export const useHeader = (props: Props) => {
  const { header } = props;
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header,
    });
  }, [navigation, header]);
};
