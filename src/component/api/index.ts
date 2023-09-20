import type { AxiosResponse, AxiosRequestConfig } from 'axios';

import axios, { isAxiosError } from 'axios';

import getEnvVars from '#/environment';

const { apiUrl } = getEnvVars();

const publicAxios = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

interface ResponseDataType {
  message: string;
  code: number;
}

export const getData = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await publicAxios.get(url, config);
    return response.data;
  } catch (err) {
    if (isAxiosError<ResponseDataType>(err)) {
      throw new Error(err.response?.data.message);
    } else {
      throw new Error('Unknown Error');
    }
  }
};

export const postData = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await publicAxios.post(url, data, config);
    return response;
  } catch (err) {
    if (isAxiosError<ResponseDataType>(err)) {
      throw new Error(err.response?.data.message);
    } else {
      throw new Error('Unknown Error');
    }
  }
};

export const putData = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await publicAxios.put(url, data, config);
    return response.data;
  } catch (err) {
    if (isAxiosError<ResponseDataType>(err)) {
      throw new Error(err.response?.data.message);
    } else {
      throw new Error('Unknown Error');
    }
  }
};

export const deleteData = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await publicAxios.delete(url, config);
    return response.data;
  } catch (err) {
    if (isAxiosError<ResponseDataType>(err)) {
      throw new Error(err.response?.data.message);
    } else {
      throw new Error('Unknown Error');
    }
  }
};
