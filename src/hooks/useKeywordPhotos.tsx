import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Photo, getKeywordPhotosOptions } from '@/services';
import { OrientationParam } from '@/services/api/endpoints/type.param';

interface Props {
  query: string;
  orientation?: OrientationParam;
}

export const useKeywordPhotos = (props: Props) => {
  const [list, setList] = React.useState<Photo[]>([]);
  const query = useInfiniteQuery(getKeywordPhotosOptions(props));

  React.useEffect(() => {
    if (query.data) setList(query.data.pages);
  }, [query.data]);

  return {
    query,
    list,
  };
};
