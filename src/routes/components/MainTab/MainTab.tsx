import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DummyScreen } from '@/components/screens/DummyScreen';
import { MainScreen } from '@/components/screens/MainScreen';
import { SearchHeader } from '@/components/sections/headers/SearchHeader';
import {
  TabNavigatorIcon,
  type TabNavigatorIconName,
} from '@/components/blocks/TabNavigatorIcon';
import { tokens } from '@/ui/themes';
import { SearchStackComponent } from '../SearchStack';
import { AuthStackComponent } from '../AuthStack';
import { MainTabParamList } from './MainTab.type';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export const MainTabComponent: React.FC = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.st.color.white,
        tabBarInactiveTintColor: tokens.st.color.neutral[500],
        tabBarIcon: ({ color }) => {
          let iconName: TabNavigatorIconName;
          switch (route.name) {
            case 'MainScreen':
              iconName = 'IconPhoto';
              break;
            case 'SearchStack':
              iconName = 'IconSearch';
              break;
            case 'SubmitScreen':
              iconName = 'IconSquarePlus';
              break;
            case 'AuthStack':
              iconName = 'IconUserCircle';
              break;
          }

          return <TabNavigatorIcon name={iconName} size={28} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: tokens.st.color.neutral[950],
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <MainTab.Screen name="MainScreen" component={MainScreen} />
      <MainTab.Screen name="SearchStack" component={SearchStackComponent} />
      <MainTab.Screen name="SubmitScreen" component={DummyScreen} />
      <MainTab.Screen name="AuthStack" component={AuthStackComponent} />
    </MainTab.Navigator>
  );
};
