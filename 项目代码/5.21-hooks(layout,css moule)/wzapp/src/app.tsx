import { RequestConfig } from 'umi';

const baseUrl = "http://111.203.59.61:8060/dev-api"
const Authorization = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImU4YWQxZWM4LTVhNzAtNDZjZi05YzQyLWEwMzYwOTFlNGEyNSJ9.EjdVIuX4pGxp7lpEYHz_z0QW99FtZfQN8_krOUBTKcnPOZMWiDVgnw_ddFfYvhimbctRraFEPC331wGAroqY5A"
export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [(url, options) => {
    console.log(baseUrl + url);
    return {
      url: baseUrl + url,
      options: { ...options, interceptors: true, headers: { ...options.headers, Authorization } },
    };

  }],
  responseInterceptors: [],
};