import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '@/components/screens/SearchScreen';
import { SearchInputScreen } from '@/components/screens/SearchInputScreen';
import { SearchStackParamList } from './SearchStack.type';

const SearchStack = createStackNavigator<SearchStackParamList>();

export const SearchStackComponent = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
      <SearchStack.Screen
        name="SearchInputScreen"
        component={SearchInputScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </SearchStack.Navigator>
  );
};
