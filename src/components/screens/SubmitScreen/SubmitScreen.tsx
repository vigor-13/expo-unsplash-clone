import React from 'react';
import RN from 'react-native';
import { IconLibraryPhoto } from '@tabler/icons-react-native';
import { useHeader, useTopics } from '@/hooks';
import { SimpleTextHeader } from '@/components/sections/headers/SimpleTextHeader';
import { TopicBoxList } from '@/components/sections/lists/TopicBoxList';
import { Text, tokens } from '@/ui';
import { TopicData } from '@/dto';
import { TopicSubmitBottomSheet } from '@/components/sections/bottomSheets/TopicSubmitBottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export const SubmitScreen: React.FC = () => {
  const { list: topics, activeTopic } = useTopics();
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const [data, setData] = React.useState<TopicData[]>([]);

  const handleOpenSheet = React.useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  React.useEffect(() => {
    if (topics) {
      const newData = topics;
      newData.shift();
      setData(newData);
    }
  }, [topics]);

  useHeader({
    header: () => <SimpleTextHeader />,
  });

  return (
    <>
      <RN.ScrollView style={styles.container}>
        <RN.TouchableOpacity
          style={styles.submitButtonContainer}
          onPress={() => alert('준비중입니다.')}
        >
          <IconLibraryPhoto size={52} color={tokens.st.color.neutral[300]} />
          <Text style={styles.submitButtonText}>
            최대 규모의 공개 사진 라이브러리에{'\n'}사진을 업로드하세요.
          </Text>
        </RN.TouchableOpacity>
        <RN.View style={styles.section}>
          <Text style={styles.sectionTitle}>주제에 제출</Text>
          <TopicBoxList data={data} onPress={handleOpenSheet} />
        </RN.View>
      </RN.ScrollView>
      <TopicSubmitBottomSheet data={activeTopic} ref={bottomSheetRef} />
    </>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    paddingHorizontal: tokens.st.space[200],
    paddingVertical: tokens.st.space[200],
  },
  submitButtonContainer: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: tokens.st.color.neutral[600],
    borderRadius: 10,
    padding: tokens.st.space['600'],
    alignItems: 'center',
    gap: tokens.st.space[125],
  },
  submitButtonText: {
    textAlign: 'center',
  },
  section: {
    marginTop: tokens.st.space[400],
    gap: tokens.st.space[200],
  },
  sectionTitle: {
    fontSize: tokens.st.font.size.lg,
    fontWeight: tokens.st.font.weight.semiBold as any,
  },
});
