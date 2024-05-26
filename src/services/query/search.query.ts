import { infiniteQueryOptions } from '@tanstack/react-query';
import { getSearchPhotos } from '@/services/api';
import { Orientation } from '@/services/api/endpoints/type.param';

export const getSearchPhotosOptions = ({
  query,
  orientation,
}: {
  query: string;
  orientation?: Orientation;
}) => {
  return infiniteQueryOptions({
    queryKey: ['photos', query, orientation],
    queryFn: async ({ pageParam, queryKey }) => {
      const query = queryKey[1]!;
      const orientation = queryKey[2] as Orientation;
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
