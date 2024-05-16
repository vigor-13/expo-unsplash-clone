import { createStackNavigator } from "@react-navigation/stack";
import { DummyScreen } from "@/ui/screens";
import { AuthStackParamList } from "./AuthStack.type";

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={DummyScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen name="SignupScreen" component={DummyScreen} />
    </AuthStack.Navigator>
  );
};
