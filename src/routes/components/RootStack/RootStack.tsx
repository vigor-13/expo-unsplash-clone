import { createStackNavigator } from '@react-navigation/stack';
import { MainTabComponent } from '../MainTab';
import { RootStackParamList } from './RootStack.type';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackComponent = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="MainTab"
        component={MainTabComponent}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
