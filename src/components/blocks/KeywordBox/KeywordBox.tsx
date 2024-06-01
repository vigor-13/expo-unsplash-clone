import React from 'react';
import {
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { tokens, Image, Overlay, Text } from '@/ui';
import { KeywordBoxData } from '@/dto';

export interface KeywordBoxProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  data: KeywordBoxData;
}

export const KeywordBox: React.FC<KeywordBoxProps> = (props) => {
  const { data, style, ...rest } = props;

  return (
    <TouchableOpacity {...rest}>
      <View style={[styles.container, style]}>
        <Image
          source={data.thumbnail}
          contentFit="cover"
          style={styles.image}
        />
        <Overlay opacity={0.4} style={styles.overlay}>
          <Text style={styles.text}>{data.title}</Text>
        </Overlay>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: tokens.st.font.size.sm,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
});
