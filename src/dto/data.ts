import { Photo, Topic } from '@/services';
import {
  ColorParam,
  OrderByParam,
  OrientationParam,
} from '@/services/api/endpoints/type.param';
import { Session } from '@supabase/supabase-js';

export type SessionData = Session | null;
export type TopicData = Topic;
export type PhotoData = Photo;
export type KeywordData = {
  title: string;
  query: string;
};
export type KeywordBoxData = KeywordData & {
  thumbnail: string;
};

export interface QueryOptionData {
  order_by?: OrderByParam;
  orientation?: OrientationParam;
  color?: ColorParam;
}
export type QueryOptionKeyData = keyof QueryOptionData;

export const DEFAULT_TOPIC_DATA = {
  id: 'editorial',
  title: 'Editorial',
  slug: 'editorial',
} as TopicData;

export const SHOW_KEYWORDS: KeywordBoxData[] = [
  {
    title: '자연',
    query: 'nature',
    thumbnail:
      'https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '우주',
    query: 'space',
    thumbnail:
      'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '흑백',
    query: 'black and white',
    thumbnail:
      'https://images.unsplash.com/photo-1532517308734-0565178471d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '추상적',
    query: 'abstract',
    thumbnail:
      'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '텍스처',
    query: 'texture',
    thumbnail:
      'https://images.unsplash.com/photo-1584384689201-e0bcbe2c7f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '동물',
    query: 'animal',
    thumbnail:
      'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '미니멀',
    query: 'minimal',
    thumbnail:
      'https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '수중',
    query: 'underwater',
    thumbnail:
      'https://images.unsplash.com/photo-1568145675395-66a2eda0c6d7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '꽃',
    query: 'flower',
    thumbnail:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '여행',
    query: 'travel',
    thumbnail:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '하늘',
    query: 'sky',
    thumbnail:
      'https://images.unsplash.com/photo-1597571063304-81f081944ee8?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '건축',
    query: 'architecture',
    thumbnail:
      'https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '드론',
    query: 'drone',
    thumbnail:
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '그라디언트',
    query: 'gradient',
    thumbnail:
      'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const DUMMY_TREND_QUERIES = [
  'cat',
  'planet',
  'travel',
  'nature',
  'astronaut',
];

interface SectionData<T> {
  title: string;
  data: T;
}

interface QueryOptionSectionItem {
  key: QueryOptionKeyData;
  list: {
    name: string;
    value: string | undefined;
    option?: {
      color?: string | undefined;
    };
  }[];
}

export const QUERY_OPTION_SECTION: SectionData<QueryOptionSectionItem[]>[] = [
  {
    title: '정렬 기준',
    data: [
      {
        key: 'order_by',
        list: [
          { name: '관련성', value: 'relevant' },
          { name: '최신순', value: 'latest' },
        ],
      },
    ],
  },
  {
    title: '방향',
    data: [
      {
        key: 'orientation',
        list: [
          { name: '모두', value: undefined },
          { name: '세로', value: 'portrait' },
          { name: '가로', value: 'landscape' },
          { name: '정사각형', value: 'squarish' },
        ],
      },
    ],
  },
  {
    title: '컬러',
    data: [
      {
        key: 'color',
        list: [
          { name: '모두', value: undefined },
          { name: '흑백', value: 'black_and_white' },
          { name: '흰색', value: 'white', option: { color: '#ffffff' } },
          { name: '검은색', value: 'black', option: { color: '#000000' } },
          { name: '노란색', value: 'yellow', option: { color: '#ffd700' } },
          { name: '주황색', value: 'orange', option: { color: '#ff8c00' } },
          { name: '빨간색', value: 'red', option: { color: '#ff4500' } },
          { name: '자주색', value: 'purple', option: { color: '#9370db' } },
          { name: '자홍색', value: 'magenta', option: { color: '#c71585' } },
          { name: '녹색', value: 'green', option: { color: '#32cd32' } },
          { name: '청록색', value: 'teal', option: { color: '#40e0d0' } },
          { name: '파란색', value: 'blue', option: { color: '#00bfff' } },
        ],
      },
    ],
  },
];
