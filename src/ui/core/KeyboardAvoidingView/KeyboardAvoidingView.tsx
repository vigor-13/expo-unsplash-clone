import React from 'react';
import RN from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

interface Props extends RN.KeyboardAvoidingViewProps {}

/**
 * @ref https://github.com/react-navigation/react-navigation/issues/3971
 */
export const KeyboardAvoidingView: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const route = useRoute();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const getKeyboardVerticalOffset = () => {
    if (RN.Platform.OS === 'ios') {
      if (route.name.includes('Modal')) {
        return headerHeight + insets.top + 10;
      } else {
        return headerHeight;
      }
    }

    return 0;
  };

  return (
    <RN.KeyboardAvoidingView
      behavior={RN.Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={getKeyboardVerticalOffset()}
      {...rest}
    >
      {children}
    </RN.KeyboardAvoidingView>
  );
};
