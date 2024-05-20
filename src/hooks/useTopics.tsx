import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTopicsOptions } from '@/services/query';
import { useTopicStore } from '@/stores';
import { DEFAULT_TOPIC_DATA, type TopicData } from '@/dto';

export const useTopics = () => {
  const query = useQuery(getTopicsOptions());
  const [list, setList] = React.useState<TopicData[]>([DEFAULT_TOPIC_DATA]);
  const { activeTopic, setActiveTopic } = useTopicStore((state) => state);

  React.useEffect(() => {
    if (query.data) {
      setList((preList) => [...preList, ...query.data]);
    }
  }, [query.data]);

  return {
    list,
    query,
    activeTopic,
    setActiveTopic,
  };
};
