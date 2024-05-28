import { createStackNavigator } from '@react-navigation/stack';
import { DummyScreen } from '@/components/screens/DummyScreen';
import { LoginScreen } from '@/components/screens/LoginScreen';
import { AuthStackParamList } from './AuthStack.type';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={DummyScreen} />
    </AuthStack.Navigator>
  );
};
