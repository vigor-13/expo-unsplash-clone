import React from 'react';
import { getCollectionsOptions } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useCollections = () => {
  const query = useQuery(getCollectionsOptions());

  return {
    query,
  };
};
