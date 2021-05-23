import { RequestConfig } from 'umi';

const baseUrl = "http://111.203.59.61:8060/dev-api"
const Authorization = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImI1MzU2OWEwLTE4ZjEtNDQyYy1iOGVlLWIzOTNmMzQxZGRjZCJ9.NEqVpMt7yHgQux--Mo3KOcgekz49jvVS9oIobzWYtG3T3pTP6rWcXVQrsVCKBovE2nBDv_Z1JEqrXfr0RK6prw"
export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [(url, options) => {
    console.log(options);
    return {
      url: baseUrl + url,
      options: { ...options, interceptors: true, headers: { ...options.headers, Authorization } },
    };

  }],
  responseInterceptors: [],
};