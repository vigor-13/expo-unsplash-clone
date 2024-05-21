import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, tokens } from '@/ui';
import { useNavigation } from '@react-navigation/native';

export const ModalHeader: React.FC = () => {
  const navigation = useNavigation();
  const closeModal = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={closeModal}>
        <Text variant="modalCloseText">완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.st.color.neutral[900],
    alignItems: 'flex-end',
    padding: tokens.st.space[250],
  },
});
