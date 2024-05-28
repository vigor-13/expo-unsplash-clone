import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

type Props = () => void;

export const useRefreshOnFocus = (refetch: Props) => {
  const enabledRef = React.useRef(false);

  useFocusEffect(
    React.useCallback(() => {
      if (enabledRef.current) {
        refetch();
      } else {
        enabledRef.current = false;
      }
    }, [refetch]),
  );
};
