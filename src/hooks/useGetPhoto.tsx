import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPhotoOptions } from '@/services';

export const useGetPhoto = (id: string) => {
  const query = useQuery(getPhotoOptions(id));

  return {
    data: query.data,
    query,
  };
};
