import React from 'react';
import { useTopicStore } from '@/stores';
import { useFlatListScroll } from '@/hooks';

export const useScrollToTopOnTopicChange = () => {
  const { activeTopic } = useTopicStore((state) => state);
  const { flatListRef, scrollToTop } = useFlatListScroll();
  const prevActiveTopicRef = React.useRef(activeTopic.slug);

  React.useEffect(() => {
    if (prevActiveTopicRef.current !== activeTopic.slug) {
      scrollToTop();
      prevActiveTopicRef.current = activeTopic.slug;
    }
  }, [activeTopic.slug, scrollToTop]);

  return { flatListRef };
};
