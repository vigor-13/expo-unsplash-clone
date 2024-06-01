import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import { Text, tokens } from '@/ui';

export interface LinkButtonProps {
  text: string;
  url: string;
}

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { text, url } = props;

  const openURL = async () => {
    if (!url) return;

    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log(`Can't open URL: ${url}`);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        openURL();
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: tokens.st.space[150],
  },
  text: {
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
});
