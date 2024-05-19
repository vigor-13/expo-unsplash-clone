import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTopicOptions } from '@/services/query';
import { useTopicStore } from '@/stores';
import { DEFAULT_TOPIC_DATA, type TopicData } from '@/dto';

export const useTopics = () => {
  const query = useQuery(getTopicOptions());
  const [list, setList] = React.useState<TopicData[]>([DEFAULT_TOPIC_DATA]);

  const { activeTopic, setActiveTopic } = useTopicStore((state) => state);

  React.useEffect(() => {
    if (query.data) {
      const data = query.data.map((topic) => ({
        id: topic.id,
        title: topic.title,
        slug: topic.slug,
      }));
      setList((preList) => [...preList, ...data]);
    }
  }, [query.data]);

  return {
    list,
    query,
    activeTopic,
    setActiveTopic,
  };
};
