import React from 'react';
import RN from 'react-native';
import {
  SearchQueryListItem,
  SearchQueryItemType,
} from '../SearchQueryListItem';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/routes/components';
import { useSearchStore } from '@/stores';

export interface SearchQueryListProps {
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
  type: SearchQueryItemType;
  data: string[];
}

export const SearchQueryList: React.FC<SearchQueryListProps> = (props) => {
  const { containerStyle, type, data } = props;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { addRecentQuery } = useSearchStore((state) => state);

  const handlePress = (query: string) => {
    navigation.navigate('QueryPhotosScreen', { query });
    addRecentQuery(query);
  };

  return (
    <RN.View style={[containerStyle]}>
      {data.map((query) => {
        return (
          <SearchQueryListItem
            key={query}
            type={type}
            query={query}
            onPress={() => handlePress(query)}
          />
        );
      })}
    </RN.View>
  );
};
