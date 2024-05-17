import { queryOptions } from '@tanstack/react-query';
import { getTopics } from '@/services/api';

export const getTopicOptions = () => {
  return queryOptions({
    queryKey: ['getTopics'],
    queryFn: async () => {
      const response = await getTopics();
      return response;
    },
    select: (data) => data.data,
  });
};
