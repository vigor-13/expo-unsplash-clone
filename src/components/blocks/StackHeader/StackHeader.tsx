import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconChevronLeft } from '@tabler/icons-react-native';
import { Text, tokens } from '@/ui';

interface Props {
  title: string;
  fixed?: boolean;
}

export const StackHeader: React.FC<Props> = (props) => {
  const { title, fixed } = props;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <View style={[{ marginTop: insets.top }, fixed && styles.fixed]}>
      <View style={[styles.container]}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={goBack}>
            <IconChevronLeft size={32} color={tokens.st.color.white} />
          </TouchableOpacity>
        </View>
        <View style={[styles.titleContainer]}>
          <Text variant="headerTitle" numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={styles.iconContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: tokens.st.space[125],
  },
  fixed: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    flex: 1,
  },
  iconContainer: {
    flex: 0.1,
  },
  titleContainer: {
    flex: 0.8,
    alignItems: 'center',
    paddingHorizontal: tokens.st.space[100],
  },
});
