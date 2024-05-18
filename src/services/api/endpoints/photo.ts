import { unsplashApi } from '../instance';
import { Photo } from './type';

/**
 * Docs: https://unsplash.com/documentation#list-photos
 */
export const getPhotos = (params: GetPhotosParams) => {
  const { page, per_page } = params;
  return unsplashApi.get<Photo[]>(`/photos`, {
    params: {
      page,
      per_page,
    },
  });
};
export interface GetPhotosParams {
  page: number;
  per_page?: number;
}
