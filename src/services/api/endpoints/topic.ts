import { unsplashApi } from '../instance';
import { Topic, Photo } from './type';

/**
 * Docs: https://unsplash.com/documentation#topics
 */
export const getTopics = () => {
  return unsplashApi.get<Topic[]>('/topics', {
    params: { page: 1, per_page: 20, order_by: 'position' },
  });
};

/**
 * Docs: https://unsplash.com/documentation#get-a-topics-photos
 */
export const getTopicsPhotos = (params: GetTopicsPhotosParams) => {
  const { idOrSlug, page = 1, per_page = 10, orientation } = params;

  return unsplashApi.get<Photo[]>(`/topics/${idOrSlug}/photos`, {
    params: {
      page: String(page),
      per_page: String(per_page),
    },
  });
};
export interface GetTopicsPhotosParams {
  idOrSlug: string;
  page?: number;
  per_page?: number;
  orientation?: 'landscape' | 'portrait' | 'squarish';
}
