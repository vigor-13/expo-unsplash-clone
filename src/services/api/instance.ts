import { createAxiosInstance } from '@/utils/axios';

export const unsplashApi = createAxiosInstance({
  baseURL: process.env.EXPO_PUBLIC_UNSPLASH_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${process.env.EXPO_PUBLIC_UNSPLASH_API_ACCESS_KEY}`,
    'Accept-Version': 'v1',
  },
});
