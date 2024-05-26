import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Photo, getSearchPhotosOptions } from '@/services';
import { Orientation } from '@/services/api/endpoints/type.param';

interface Props {
  query: string;
  orientation?: Orientation;
}

export const useSearchPhotos = (props: Props) => {
  const [list, setList] = React.useState<Photo[]>([]);
  const query = useInfiniteQuery(getSearchPhotosOptions(props));

  React.useEffect(() => {
    if (query.data) setList(query.data.pages);
  }, [query.data]);

  return {
    query,
    list,
  };
};
