import React from 'react';
import { View, FlatList, Dimensions, StyleProp, ViewStyle } from 'react-native';
import { KeywordBoxData } from '@/dto';
import { KeywordBox } from '../KeywordBox';

/**
 * Reference: https://github.com/facebook/react-native/issues/21441#issuecomment-566987535
 */
const { width: screenWidth } = Dimensions.get('window');
const spacing = 8;
const itemWidth = screenWidth * 0.29;
const itemHeight = itemWidth;
const nishhar = screenWidth - ((itemWidth + spacing) * 2 + spacing * 2);

export interface KeywordBoxListProps {
  containerStyle?: StyleProp<ViewStyle>;
  data: KeywordBoxData[];
}

export const KeywordBoxList: React.FC<KeywordBoxListProps> = (props) => {
  const { containerStyle, data } = props;
  const groupedData = data.reduce<any>((result, item, index) => {
    if (index % 2 === 0) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
    return result;
  }, []);

  const renderRow = ({
    item,
    index,
  }: {
    item: KeywordBoxData[];
    index: number;
  }) => {
    return (
      <View>
        {item.map((keywordData: KeywordBoxData, subIndex: number) => (
          <KeywordBox
            data={keywordData}
            style={{
              width: itemWidth,
              height: itemHeight,
              marginLeft: index === 0 ? 0 : spacing,
              marginBottom: subIndex === 1 ? 0 : spacing,
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={groupedData}
      renderItem={renderRow}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      snapToAlignment={'start'}
      snapToOffsets={[...Array(data.length)].map(
        (_, i) => i * (itemWidth + spacing) - nishhar * 0.15,
      )}
      decelerationRate="fast"
      contentContainerStyle={containerStyle}
    />
  );
};
