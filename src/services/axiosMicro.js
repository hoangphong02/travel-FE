import axios from 'axios';
// import { routesAuth } from '~/configs';
import { STORAGE_KEY } from '../constants';
import { configMicro } from './serverMicro';

const axiosMicro = axios.create({
  baseURL: configMicro.API_URL,
  timeout: configMicro.DEFAULT_REQUEST_TIMEOUT,
});

// Request interceptor for API calls
axiosMicro.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);
    config.headers = {
      Accept: 'application/json',
      Authorization: accessToken,
      Token: `${accessToken}`
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosMicro.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      const originalRequest = error.config;
      if (error?.response?.status === 403 && !originalRequest['_retry']) {
        originalRequest['_retry'] = true;
        const refreshToken = localStorage.getItem(STORAGE_KEY.REFRESH_TOKEN);
        axios.defaults.headers.common['Authorization'] = refreshToken;
        return axiosMicro(originalRequest);
      }
      if (error?.response?.status === 401) {
        localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
        // window.location.replace(routesAuth.login);
      }

      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  },
);

export { axiosMicro };
