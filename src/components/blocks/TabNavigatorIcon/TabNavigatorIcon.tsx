import React from 'react';
import RN from 'react-native';
import {
  IconPhoto,
  IconSearch,
  IconSquarePlus,
  IconUserCircle,
} from '@tabler/icons-react-native';
import { MainTabParamList } from '@/routes/components/MainTab';
import { Avatar, Overlay } from '@/ui';

export type TabNavigatorIconName =
  | 'IconPhoto'
  | 'IconSearch'
  | 'IconSquarePlus'
  | 'IconUserCircle';

export interface TabNavigatorIconProps {
  name: keyof MainTabParamList;
  color: string;
  size: number;
  focused: boolean;
}

export const TabNavigatorIcon: React.FC<TabNavigatorIconProps> = (props) => {
  const { name, color, size, focused } = props;

  const renderIcon = () => {
    switch (name) {
      case 'MainScreen':
        return <IconPhoto color={color} size={size} />;
      case 'SearchStack':
        return <IconSearch color={color} size={size} />;
      case 'SubmitScreen':
        return <IconSquarePlus color={color} size={size} />;
      case 'AuthStack':
        return <IconUserCircle color={color} size={size} />;
      case 'MyProfileScreen':
        return focused ? (
          <Avatar size="sm" />
        ) : (
          <RN.View>
            <Overlay opacity={0.5} />
            <Avatar size="sm" />
          </RN.View>
        );
    }
  };

  return renderIcon();
};
