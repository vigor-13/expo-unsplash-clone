import { infiniteQueryOptions } from '@tanstack/react-query';
import { getSearchPhotos } from '@/services/api';
import { OrientationParam } from '@/services/api/endpoints/type.param';
import { QueryOptionData } from '@/dto';

export const getKeywordPhotosOptions = ({
  query,
  orientation,
}: {
  query: string;
  orientation?: OrientationParam;
}) => {
  return infiniteQueryOptions({
    queryKey: ['photos', query, orientation],
    queryFn: async ({ pageParam, queryKey }) => {
      const query = queryKey[1]!;
      const orientation = queryKey[2] as OrientationParam;
      const response = await getSearchPhotos({
        query,
        page: pageParam,
        orientation,
      });
      return response;
    },
    initialPageParam: 1,
    select: (data) => {
      const newData = data.pages.flatMap((page) => page.data.results);
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
      if (lastPage.data.results.length === 0) return;
      return lastPageParam + 1;
    },
  });
};

export const getQueryPhotosOptions = ({
  query,
  option,
}: {
  query: string;
  option: QueryOptionData;
}) => {
  return infiniteQueryOptions({
    queryKey: ['photos', query, option],
    queryFn: async ({ pageParam, queryKey }) => {
      const query = queryKey[1] as string;
      const option = queryKey[2] as QueryOptionData;
      const response = await getSearchPhotos({
        query,
        page: pageParam,
        order_by: option.order_by,
        orientation: option.orientation,
        color: option.color,
      });
      return response;
    },
    initialPageParam: 1,
    select: (data) => {
      const newData = data.pages.flatMap((page) => page.data.results);
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
      if (lastPage.data.results.length === 0) return;
      return lastPageParam + 1;
    },
  });
};
