import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Photo, getTopicsPhotosOptions } from '@/services';
import { useTopicStore } from '@/stores';

export const useTopicsPhotos = () => {
  const { activeTopic } = useTopicStore((state) => state);
  const [list, setList] = React.useState<Photo[]>([]);
  const query = useInfiniteQuery(getTopicsPhotosOptions(activeTopic.slug));

  React.useEffect(() => {
    if (query.data) setList(query.data.pages);
  }, [query.data]);

  return {
    query,
    list,
  };
};
