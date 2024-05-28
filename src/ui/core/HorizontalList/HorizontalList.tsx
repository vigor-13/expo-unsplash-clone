import React from 'react';
import RN from 'react-native';
import { useGroupedData } from './useGroupedData';

interface Props {
  data: any[];
  groupCount?: number;
  itemWidth: number;
  spacing?: number;
  snapOffsetSpacing?: number;
  contentContainerStyle?: RN.StyleProp<RN.ViewStyle>;
  renderItem: RN.ListRenderItem<any>;
}

/**
 * Reference: https://github.com/facebook/react-native/issues/21441#issuecomment-566987535
 */
export const HorizontalList: React.FC<Props> = (props) => {
  const {
    data,
    groupCount = 1,
    itemWidth,
    spacing = 0,
    snapOffsetSpacing = 0,
    contentContainerStyle,
    renderItem,
  } = props;
  const { groupedData } = useGroupedData({ data, groupCount });

  return (
    <RN.FlatList
      data={groupedData}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToAlignment="start"
      snapToOffsets={[...Array(groupedData.length)].map(
        (_, i) => i * (itemWidth + spacing) + snapOffsetSpacing,
      )}
      contentContainerStyle={contentContainerStyle}
    />
  );
};
