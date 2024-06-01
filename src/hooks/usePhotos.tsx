import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Photo, getPhotosOptions } from '@/services';
import { useTopicStore } from '@/stores';

export const usePhotos = () => {
  const { activeTopic } = useTopicStore((state) => state);
  const [list, setList] = React.useState<Photo[]>([]);
  const query = useInfiniteQuery(getPhotosOptions(activeTopic.slug));

  React.useEffect(() => {
    if (query.data) setList(query.data.pages);
  }, [query.data]);

  return {
    query,
    list,
  };
};
