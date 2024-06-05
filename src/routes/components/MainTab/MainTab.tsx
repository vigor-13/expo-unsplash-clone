import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '@/components/screens/MainScreen';
import { SubmitScreen } from '@/components/screens/SubmitScreen';
import { TabNavigatorIcon } from '@/components/blocks/TabNavigatorIcon';
import { tokens } from '@/ui/themes';
import { useAuthStore } from '@/stores';
import { SearchStackComponent } from '../SearchStack';
import { AuthStackComponent } from '../AuthStack';
import { MainTabParamList } from './MainTab.type';
import { MyProfileScreen } from '@/components/screens/MyProfileScreen';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export const MainTabComponent: React.FC = () => {
  const { session } = useAuthStore((state) => state);

  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.st.color.white,
        tabBarInactiveTintColor: tokens.st.color.neutral[500],
        tabBarIcon: ({ color, focused }) => (
          <TabNavigatorIcon
            name={route.name}
            size={28}
            color={color}
            focused={focused}
          />
        ),
        tabBarStyle: {
          backgroundColor: tokens.st.color.neutral[950],
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <MainTab.Screen name="MainScreen" component={MainScreen} />
      <MainTab.Screen name="SearchStack" component={SearchStackComponent} />
      <MainTab.Screen name="SubmitScreen" component={SubmitScreen} />
      {session && session.user ? (
        <MainTab.Screen name="MyProfileScreen" component={MyProfileScreen} />
      ) : (
        <MainTab.Screen name="AuthStack" component={AuthStackComponent} />
      )}
    </MainTab.Navigator>
  );
};
