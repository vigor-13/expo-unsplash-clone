import { TopicData } from '@/dto';
import { Overlay, Text, Image, tokens } from '@/ui';
import React from 'react';
import RN from 'react-native';

interface Props extends RN.TouchableOpacityProps {
  data: TopicData;
  style?: RN.StyleProp<RN.ViewStyle>;
}

export const TopicBox: React.FC<Props> = (props) => {
  const { style, data, ...rest } = props;

  return (
    <RN.TouchableOpacity {...rest}>
      <RN.View style={[styles.container, style]}>
        <Image
          source={data.cover_photo.urls.small}
          contentFit="cover"
          style={styles.image}
        />
        <Overlay style={styles.overlay}>
          <Text style={styles.titleText}>{data.title}</Text>
        </Overlay>
      </RN.View>
    </RN.TouchableOpacity>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.st.space['200'],
  },
  titleText: {
    fontSize: tokens.st.font.size.sm,
    fontWeight: tokens.st.font.weight.semiBold as any,
    textAlign: 'center',
  },
});
