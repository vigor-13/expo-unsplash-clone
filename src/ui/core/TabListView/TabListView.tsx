import React from 'react';
import RN from 'react-native';
import { Text } from '@/ui';

interface Props {
  headerComponent?: () => React.ReactElement;
  tabComponent?: () => React.ReactElement;
  data: any[];
}

export const TabListView: React.FC<Props> = (props) => {
  const { headerComponent, tabComponent, data } = props;
  const sections = [
    { title: 'HEADER_COMPONENT', data: [] },
    { title: 'TAB_COMPONENT', data },
  ];

  return (
    <RN.SectionList
      sections={sections}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={true}
      stickyHeaderHiddenOnScroll={false}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => {
        if (title === 'HEADER_COMPONENT') {
          return headerComponent ? headerComponent() : null;
        }
        if (title === 'TAB_COMPONENT') {
          return tabComponent ? tabComponent() : null;
        }
        return null;
      }}
      renderItem={({ item, index }) => {
        if (!item) return null;
        return (
          <RN.View
            style={{
              height: 100,
              backgroundColor: index > 5 ? 'skyblue' : 'green',
            }}
          />
        );
      }}
    />
  );
};
