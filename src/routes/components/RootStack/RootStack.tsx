import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppInfoScreen } from '@/components/screens/AppInfoScreen';
import { PhotoScreen } from '@/components/screens/PhotoScreen';
import { KeywordPhotosScreen } from '@/components/screens/KeywordPhotosScreen';
import { ModalHeader } from '@/components/blocks/ModalHeader';
import { MainTabComponent } from '../MainTab';
import { RootStackParamList } from './RootStack.type';
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
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen name="PhotoScreen" component={PhotoScreen} />
        <RootStack.Screen
          name="KeywordPhotosScreen"
          component={KeywordPhotosScreen}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          gestureEnabled: true,
          gestureDirection: 'vertical',
          gestureResponseDistance: screenHeight,
          header: () => <ModalHeader />,
        }}
      >
        <RootStack.Screen name="AppInfoScreen" component={AppInfoScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
