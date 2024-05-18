import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Photo, getPhotosOptions } from '@/services';

export const usePhotoList = () => {
  const [list, setList] = React.useState<Photo[]>([]);
  const query = useInfiniteQuery(getPhotosOptions());

  React.useEffect(() => {
    if (query.data) setList(query.data.pages);
  }, [query.data]);

  return {
    query,
    list,
  };
};
