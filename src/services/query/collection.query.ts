import { queryOptions } from '@tanstack/react-query';
import { getCollections } from '../api/endpoints/collection';

export const getCollectionsOptions = () => {
  return queryOptions({
    queryKey: ['getCollections'],
    queryFn: async () => {
      const response = await getCollections();
      return response;
    },
    select: (data) => {
      return data.data;
    },
  });
};
