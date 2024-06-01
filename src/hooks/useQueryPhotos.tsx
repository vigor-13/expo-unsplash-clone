import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Photo, getQueryPhotosOptions } from '@/services';
import { useSearchStore } from '@/stores';

interface Props {
  query: string;
}

export const useQueryPhotos = (props: Props) => {
  const [list, setList] = React.useState<Photo[]>([]);
  const { queryOption } = useSearchStore((state) => state);
  const query = useInfiniteQuery(
    getQueryPhotosOptions({
      query: props.query,
      option: queryOption,
    }),
  );

  React.useEffect(() => {
    if (query.data) setList(query.data.pages);
  }, [query.data]);

  return {
    query,
    list,
  };
};
