import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ExtendedAxiosResponse<T = any> {
  ok: boolean;
  data: T;
  status: number;
  config: AxiosRequestConfig;
  request?: any;
  error?: any;
}

export const apiClient = axios.create({
  responseType: 'json',
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => normalizeSuccessResponse(response),
  (error) => normalizeErrorResponse(error)
);

const normalizeSuccessResponse = (response: AxiosResponse): ExtendedAxiosResponse => {
  return {
    ...response,
    ok: true,
  };
};

const formatAxiosError = (error: any): ExtendedAxiosResponse => {
  return {
    ok: false,
    data: error.response?.data,
    status: error.response?.status,
    config: error.config,
    request: error.request,
    error,
  };
};

const normalizeErrorResponse = (error: any): ExtendedAxiosResponse => {
  if (!error.response || error.isAxiosError) {
    return formatAxiosError(error);
  }

  return formatAxiosError(error);
};
