import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DummyScreen } from "@/components/screens";
import { TabNavigatorIcon, type TabNavigatorIconName } from '@/components/ui';
import { AuthStackComponent } from "../AuthStack";
import { MainTabParamList } from "./MainTab.type";

const MainTab = createBottomTabNavigator<MainTabParamList>();

export const MainTabComponent: React.FC = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
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

          return <TabNavigatorIcon name={iconName} size={28} color={color} />
        },
        tabBarStyle: {
          backgroundColor: 'black',
          paddingTop: 10,
        },
      })}

    >
      <MainTab.Screen name="MainScreen" component={DummyScreen} />
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
