import { unsplashApi } from '../instance';
import { Topic } from './type';

/**
 * Docs: https://unsplash.com/documentation#topics
 */
export const getTopics = () => {
  return unsplashApi.get<Topic[]>('/topics', {
    params: { page: 1, per_page: 20, order_by: 'position' },
  });
};
