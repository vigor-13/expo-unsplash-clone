import { unsplashApi } from '../instance';
import { Photo, PhotoDetail } from './type';

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

/**
 * Docs: https://unsplash.com/documentation#get-a-random-photo
 */
export const getRandomPhoto = () => {
  return unsplashApi.get<Photo>(`/photos/random`, {});
};

/**
 * Docs: https://unsplash.com/documentation#get-a-photo
 */
export const getPhoto = (param: GetPhotoParam) => {
  const { id } = param;
  return unsplashApi.get<PhotoDetail>(`/photos/${id}`);
};
export interface GetPhotoParam {
  id: string;
}
