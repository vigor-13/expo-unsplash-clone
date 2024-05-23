import { unsplashApi } from '../instance';
import { Photo } from './type';
import { Orientation } from './type.param';

/**
 * Docs: https://unsplash.com/documentation#search-photos
 */
export const getSearchPhotos = (params: GetSearchPhotosParams) => {
  const { query, page, per_page = 10, orientation } = params;
  return unsplashApi.get<GetSearchPhotosResponse>('/search/photos', {
    params: {
      query,
      page: String(page),
      per_page: String(per_page),
      orientation,
    },
  });
};
export interface GetSearchPhotosParams {
  query: string;
  page: number;
  per_page?: number;
  orientation?: Orientation;
}
export interface GetSearchPhotosResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}
