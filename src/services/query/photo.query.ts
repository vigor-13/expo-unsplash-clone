import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import { getPhotos, getRandomPhoto } from '@/services/api';
import { DEFAULT_TOPIC_DATA } from '@/dto';

export const getPhotosOptions = (slug: string) => {
  return infiniteQueryOptions({
    queryKey: ['photos'],
    queryFn: async ({ pageParam }) => {
      const response = await getPhotos({ page: pageParam });
      return response;
    },
    initialPageParam: 2,
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
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.data.length === 0) return;
      return lastPageParam + 1;
    },
    enabled: slug === DEFAULT_TOPIC_DATA.slug,
  });
};

export const getRandomPhotoOptions = () => {
  return queryOptions({
    queryKey: ['getRandomPhoto'],
    queryFn: async () => {
      const response = await getRandomPhoto();
      return response;
    },
    select: (data) => {
      return data.data;
    },
  });
};
