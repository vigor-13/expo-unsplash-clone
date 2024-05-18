import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Text } from '@/ui/core/Text';
import { tokens } from '@/ui/themes';

interface TopicTabButtonProps {
  text: string;
  active?: boolean;
  onPress: () => void;
}

export const TopicTabButton: React.FC<TopicTabButtonProps> = (props) => {
  const { text, active, onPress } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, active && styles.active]}>
        <Text variant="tabItem">{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: tokens.st.space[150],
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: tokens.st.color.white,
  },
});
