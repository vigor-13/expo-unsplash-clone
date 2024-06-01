import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@/components/screens/LoginScreen';
import { SignupScreen } from '@/components/screens/SignupScreen';
import { AuthStackParamList } from './AuthStack.type';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};
