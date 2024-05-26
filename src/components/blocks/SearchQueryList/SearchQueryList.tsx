import React from 'react';
import RN from 'react-native';
import {
  SearchQueryListItem,
  SearchQueryItemType,
} from '../SearchQueryListItem';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/routes/components';
import { DUMMY_TREND_QUERIES } from '@/dto';

export interface SearchQueryListProps {
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
  type: SearchQueryItemType;
}

export const SearchQueryList: React.FC<SearchQueryListProps> = (props) => {
  const { containerStyle, type } = props;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = (query: string) => {
    navigation.navigate('QueryPhotosScreen', { query });
  };

  return (
    <RN.View style={[containerStyle]}>
      {DUMMY_TREND_QUERIES.map((query) => {
        return (
          <SearchQueryListItem
            type={type}
            query={query}
            onPress={() => handlePress(query)}
          />
        );
      })}
    </RN.View>
  );
};
