import axios, { CreateAxiosDefaults } from 'axios';
import qs from 'qs';

export const createAxiosInstance = (props: CreateAxiosDefaults) => {
  const { baseURL, headers } = props;

  const instance = axios.create({
    baseURL,
    headers,
    paramsSerializer(params) {
      return qs.stringify(params);
    },
  });

  return instance;
};
