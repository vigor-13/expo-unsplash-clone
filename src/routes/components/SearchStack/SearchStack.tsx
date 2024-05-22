import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '@/components/screens/SearchScreen';
import { SearchHeader } from '@/components/blocks/SearchHeader';
import { SearchStackParamList } from './SearchStack.type';

const SearchStack = createStackNavigator<SearchStackParamList>();

export const SearchStackComponent = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          header: () => <SearchHeader />,
        }}
      />
    </SearchStack.Navigator>
  );
};
