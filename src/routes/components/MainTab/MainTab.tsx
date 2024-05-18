import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DummyScreen } from '@/components/screens/DummyScreen';
import { MainScreen } from '@/components/screens/MainScreen';
import {
  TabNavigatorIcon,
  type TabNavigatorIconName,
} from '@/components/blocks/TabNavigatorIcon';
import { MainHeader } from '@/components/blocks/MainHeader';
import { tokens } from '@/ui/themes';
import { AuthStackComponent } from '../AuthStack';
import { MainTabParamList } from './MainTab.type';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export const MainTabComponent: React.FC = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.st.color.white,
        tabBarInactiveTintColor: tokens.st.color.gray[100],
        tabBarIcon: ({ color }) => {
          let iconName: TabNavigatorIconName;
          switch (route.name) {
            case 'MainScreen':
              iconName = 'IconPhoto';
              break;
            case 'SearchScreen':
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
          backgroundColor: tokens.st.color.black,
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <MainTab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          header: () => <MainHeader />,
        }}
      />
      <MainTab.Screen name="SearchScreen" component={DummyScreen} />
      <MainTab.Screen
        name="SubmitScreen"
        component={DummyScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="AuthStack"
        component={AuthStackComponent}
        options={{
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};
