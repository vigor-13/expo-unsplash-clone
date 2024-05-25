import React from 'react';
import RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, tokens } from '@/ui';

interface Props {
  text: string;
  onPress?: () => void;
}

export const HeaderTextButton: React.FC<Props> = (props) => {
  const { text, onPress } = props;
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <RN.TouchableOpacity onPress={onPress ? onPress : goBack}>
      <Text style={styles.text}>{text}</Text>
    </RN.TouchableOpacity>
  );
};

const styles = RN.StyleSheet.create({
  text: {
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
});
