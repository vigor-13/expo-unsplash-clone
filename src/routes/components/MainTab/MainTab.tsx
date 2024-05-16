import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DummyScreen } from "@/ui/screens";
import { MainTabParamList } from "./MainTab.type";
import { AuthStackComponent } from "../AuthStack";

const MainTab = createBottomTabNavigator<MainTabParamList>();

export const MainTabComponent: React.FC = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
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
