import { Photo } from '@/services';

export interface TopicData {
  id: string;
  title: string;
  slug: string;
}

export const DEFAULT_TOPIC_DATA: TopicData = {
  id: 'editorial',
  title: 'Editorial',
  slug: 'editorial',
};

export type PhotoData = Photo;
