import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTopicOptions } from '@/services/query';

export interface TopicListItem {
  id: string;
  title: string;
}

export const useTopicList = () => {
  const [list, setList] = React.useState<TopicListItem[]>([
    { id: 'editorial', title: 'Editorial' },
  ]);
  const query = useQuery(getTopicOptions());

  React.useEffect(() => {
    if (query.data) {
      const data = query.data.map((topic) => ({
        id: topic.id,
        title: topic.title,
      }));
      setList((preList) => [...preList, ...data]);
    }
  }, [query.data]);

  return {
    list,
    query,
  };
};
