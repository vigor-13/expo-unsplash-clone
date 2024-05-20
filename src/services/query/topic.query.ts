import { queryOptions, infiniteQueryOptions } from '@tanstack/react-query';
import { getTopics, getTopicsPhotos } from '@/services/api';
import { DEFAULT_TOPIC_DATA } from '@/dto';

export const getTopicsOptions = () => {
  return queryOptions({
    queryKey: ['getTopics'],
    queryFn: async () => {
      const response = await getTopics();
      return response;
    },
    select: (data) => data.data,
  });
};

export const getTopicsPhotosOptions = (slug: string) => {
  return infiniteQueryOptions({
    queryKey: ['topic-photos', slug],
    queryFn: async ({ pageParam, queryKey }) => {
      const slug = queryKey[1];
      const response = await getTopicsPhotos({
        idOrSlug: slug,
        page: pageParam,
      });
      return response;
    },
    initialPageParam: 1,
    select: (data) => {
      const newData = data.pages.flatMap((page) => page.data);
      const filtteredData = newData.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.id === item.id),
      );
      return {
        pages: filtteredData,
        pageParams: [...data.pageParams],
      };
    },
    getNextPageParam: (lastPage, _appPages, lastPageParam) => {
      if (lastPage.data.length === 0) return;
      return lastPageParam + 1;
    },
    enabled: slug !== DEFAULT_TOPIC_DATA.slug,
  });
};
