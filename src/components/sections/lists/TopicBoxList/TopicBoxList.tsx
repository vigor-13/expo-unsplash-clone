import { TopicData } from '@/dto';
import React from 'react';
import RN from 'react-native';
import { HorizontalList } from '@/ui';
import { TopicBox } from '@/components/blocks/TopicBox';
import { useTopics } from '@/hooks';

const { width: screenWidth } = RN.Dimensions.get('window');
const spacing = 12;
const itemWidth = screenWidth * 0.41;
const itemHeight = itemWidth * 0.75;

interface Props {
  data: TopicData[];
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
  onPress?: () => void;
}

export const TopicBoxList: React.FC<Props> = (props) => {
  const { data, containerStyle, onPress } = props;
  const { setActiveTopic } = useTopics();

  const renderRow = ({ item, index }: { item: TopicData[]; index: number }) => {
    return (
      <RN.View>
        {item.map((topicData: TopicData, subIndex: number) => (
          <TopicBox
            key={`${index}-${subIndex}`}
            data={topicData}
            style={{
              width: itemWidth,
              height: itemHeight,
              marginLeft: index === 0 ? 0 : spacing,
              marginBottom: subIndex === 1 ? 0 : spacing,
            }}
            onPress={() => {
              setActiveTopic(topicData);
              if (onPress) onPress();
            }}
          />
        ))}
      </RN.View>
    );
  };

  return (
    <HorizontalList
      data={data}
      groupCount={2}
      spacing={spacing}
      itemWidth={itemWidth}
      renderItem={renderRow}
      contentContainerStyle={containerStyle}
    />
  );
};
