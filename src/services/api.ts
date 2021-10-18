import axios, { AxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN } from 'utils/storageKeys';

const basicConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
};

const apiInstance = axios.create(basicConfig);

apiInstance.interceptors.request.use(async (configuration) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  return {
    ...configuration,
    headers: {
      ...configuration.headers,
      Authorization: accessToken,
    },
  };
});

export default apiInstance;

export const publicApi = axios.create(basicConfig);
