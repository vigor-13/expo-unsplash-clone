import React from 'react';
import RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconChevronLeft } from '@tabler/icons-react-native';
import { Text, tokens } from '@/ui';

interface Props {
  headerLeft?: () => React.ReactNode;
  headerRight?: () => React.ReactNode;
  title?: string;
  float?: boolean;
  variant?: 'modal' | 'screen';
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
}

export const Header: React.FC<Props> = (props) => {
  const {
    headerLeft,
    headerRight,
    title,
    float = false,
    containerStyle,
    variant = 'screen',
  } = props;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const getModalHeaderInsets = () => {
    if (RN.Platform.OS === 'ios' && variant === 'modal') return 0;
    return insets.top;
  };

  const renderDefaultBackButton = () => {
    return (
      <RN.TouchableOpacity onPress={goBack}>
        <IconChevronLeft size={32} color={tokens.st.color.white} />
      </RN.TouchableOpacity>
    );
  };

  return (
    <RN.View
      style={[{ marginTop: getModalHeaderInsets() }, float && styles.absolute]}
    >
      <RN.View
        style={[
          styles.container,
          variant === 'screen' && styles.screenStyle,
          variant === 'modal' && styles.modalStyle,
          containerStyle,
        ]}
      >
        <RN.View style={styles.leftContainer}>
          {headerLeft ? headerLeft() : renderDefaultBackButton()}
        </RN.View>
        <RN.View style={styles.titleContainer}>
          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
        </RN.View>
        <RN.View style={styles.rightContainer}>
          {headerRight && headerRight()}
        </RN.View>
      </RN.View>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  absolute: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: tokens.st.font.size.lg,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
  leftContainer: {
    flex: 0.2,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  modalStyle: {
    padding: tokens.st.space[250],
    backgroundColor: tokens.st.color.neutral[900],
  },
  screenStyle: {
    padding: tokens.st.space[125],
  },
});
