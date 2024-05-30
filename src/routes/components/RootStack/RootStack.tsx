import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppInfoScreen } from '@/components/screens/AppInfoScreen';
import { PhotoScreen } from '@/components/screens/PhotoScreen';
import { PhotoInfoScreen } from '@/components/screens/PhotoInfoScreen';
import { KeywordPhotosScreen } from '@/components/screens/KeywordPhotosScreen';
import { QueryPhotosScreen } from '@/components/screens/QueryPhotosScreen';
import { MainTabComponent } from '../MainTab';
import { RootStackParamList } from './RootStack.type';
import { QueryOptionScreen } from '@/components/screens/QueryOptionScreen';
const screenHeight = Dimensions.get('window').height;

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackComponent = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="MainTab"
          component={MainTabComponent}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen name="PhotoScreen" component={PhotoScreen} />
        <RootStack.Screen
          name="KeywordPhotosScreen"
          component={KeywordPhotosScreen}
        />
        <RootStack.Screen
          name="QueryPhotosScreen"
          component={QueryPhotosScreen}
          options={{
            animationEnabled: false,
          }}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          gestureEnabled: true,
          gestureDirection: 'vertical',
          gestureResponseDistance: screenHeight,
        }}
      >
        <RootStack.Screen name="AppInfoScreen" component={AppInfoScreen} />
        <RootStack.Screen name="PhotoInfoScreen" component={PhotoInfoScreen} />
        <RootStack.Screen
          name="QueryOptionScreen"
          component={QueryOptionScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
