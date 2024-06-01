import { unsplashApi } from '../instance';
import { Photo } from './type';
import { ColorParam, OrderByParam, OrientationParam } from './type.param';

/**
 * Docs: https://unsplash.com/documentation#search-photos
 */
export const getSearchPhotos = (params: GetSearchPhotosParams) => {
  const { query, page, per_page = 10, orientation, order_by, color } = params;
  return unsplashApi.get<GetSearchPhotosResponse>('/search/photos', {
    params: {
      query,
      page: String(page),
      per_page: String(per_page),
      orientation,
      order_by,
      color,
    },
  });
};
export interface GetSearchPhotosParams {
  query: string;
  page: number;
  per_page?: number;
  orientation?: OrientationParam;
  order_by?: OrderByParam;
  color?: ColorParam;
}
export interface GetSearchPhotosResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}
