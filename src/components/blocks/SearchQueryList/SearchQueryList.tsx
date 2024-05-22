import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import {
  SearchQueryListItem,
  SearchQueryItemType,
} from '../SearchQueryListItem';

export interface SearchQueryListProps {
  containerStyle?: StyleProp<ViewStyle>;
  type: SearchQueryItemType;
}

export const SearchQueryList: React.FC<SearchQueryListProps> = (props) => {
  const { containerStyle, type } = props;

  return (
    <View style={[containerStyle]}>
      <SearchQueryListItem type={type} query="그라데이션" />
      <SearchQueryListItem type={type} query="자연" />
      <SearchQueryListItem type={type} query="animal" />
      <SearchQueryListItem type={type} query="nature" />
    </View>
  );
};

const styles = StyleSheet.create({});
