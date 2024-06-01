import React from 'react';
import RN from 'react-native';
import { Text } from '../Text';
import { tokens } from '../../themes';

interface Props {
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
  tabs: string[];
  onPress?: (tabIndex: number) => void;
}

export const Tab: React.FC<Props> = (props) => {
  const { containerStyle, tabs, onPress } = props;
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <RN.View style={[styles.container, containerStyle]}>
      <RN.View style={styles.tabBar}>
        {tabs.map((tab, index) => (
          <RN.TouchableOpacity
            key={index}
            style={[styles.tabItem, activeTab === index && styles.activeTab]}
            onPress={() => {
              setActiveTab(index);
              if (onPress) onPress(index);
            }}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </RN.TouchableOpacity>
        ))}
      </RN.View>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: tokens.st.color.neutral[800],
    borderRadius: 6,
    overflow: 'hidden',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: tokens.st.space['075'],
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: tokens.st.color.neutral[600],
  },
  tabText: {
    fontSize: tokens.st.font.size.sm,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
