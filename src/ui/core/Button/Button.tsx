import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { tokens } from '@/ui/themes';
import { Text } from '../Text';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { style, children, text, textStyle, ...rest } = props;

  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      {children ? (
        children
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: tokens.st.color.white,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    fontSize: tokens.st.font.size.sm,
    color: tokens.st.color.black,
    fontWeight: tokens.st.font.weight.bold as any,
  },
});
