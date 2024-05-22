import { unsplashApi } from '../instance';
import { Photo } from './type';

/**
 * Docs: https://unsplash.com/documentation#list-collections
 */
export const getCollections = () => {
  return unsplashApi.get(`/collections`);
};
