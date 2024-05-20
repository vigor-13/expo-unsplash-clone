import { Photo, Topic } from '@/services';

export type TopicData = Topic;
export type PhotoData = Photo;

export const DEFAULT_TOPIC_DATA = {
  id: 'editorial',
  title: 'Editorial',
  slug: 'editorial',
} as TopicData;
