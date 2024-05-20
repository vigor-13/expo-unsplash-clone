import React from 'react';
import { getRandomPhotoOptions } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useRandomPhoto = () => {
  const query = useQuery(getRandomPhotoOptions());

  return {
    data: query.data,
  };
};
