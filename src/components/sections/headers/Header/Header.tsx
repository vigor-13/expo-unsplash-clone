import React from 'react';
import RN from 'react-native';
import { Text, tokens } from '@/ui';

interface Props {
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  title?: string;
}

export const Header: React.FC<Props> = (props) => {
  const { headerLeft, headerRight, title } = props;

  return (
    <RN.View>
      <RN.View style={styles.container}>
        <RN.View style={styles.leftContainer}>{headerLeft}</RN.View>
        <RN.View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </RN.View>
        <RN.View style={styles.rightContainer}>{headerRight}</RN.View>
      </RN.View>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: tokens.st.space[250],
    backgroundColor: tokens.st.color.neutral[900],
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
});
