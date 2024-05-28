import React from 'react';
import RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeywordBoxData, KeywordData } from '@/dto';
import { HorizontalList } from '@/ui';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/routes/components';
import { KeywordBox } from '../../../blocks/KeywordBox';

const { width: screenWidth } = RN.Dimensions.get('window');
const spacing = 8;
const itemWidth = screenWidth * 0.29;
const itemHeight = itemWidth;

interface Props {
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
  data: KeywordBoxData[];
}

export const KeywordBoxList: React.FC<Props> = (props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { containerStyle, data } = props;

  const onPressKeywordBox = (props: KeywordData) => {
    navigation.navigate('KeywordPhotosScreen', props);
  };

  const renderRow = ({
    item,
    index,
  }: {
    item: KeywordBoxData[];
    index: number;
  }) => {
    return (
      <RN.View>
        {item.map((keywordData: KeywordBoxData, subIndex: number) => (
          <KeywordBox
            key={`${index}-${subIndex}`}
            data={keywordData}
            onPress={() =>
              onPressKeywordBox({
                query: keywordData.query,
                title: keywordData.title,
              })
            }
            style={{
              width: itemWidth,
              height: itemHeight,
              marginLeft: index === 0 ? 0 : spacing,
              marginBottom: subIndex === 1 ? 0 : spacing,
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
      itemWidth={itemWidth}
      spacing={spacing}
      snapOffsetSpacing={-20}
      renderItem={renderRow}
      contentContainerStyle={containerStyle}
    />
  );
};
