import { RequestConfig } from 'umi';

const baseUrl="http://111.203.59.61:8060/dev-api"
const Authorization="Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjQyY2MxYWYxLTFhN2ItNDQwMC04ZjIyLWQwZjZiODQyODYyZCJ9.owvzj6aochGsGApvXdOJNwvZOvmujDHKlElHiddET5j3LiFmP0sU13RBTw-VQKYOHMD4JZlDoSEp9mu7LayFRA"
export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [(url, options) => {
    console.log(baseUrl+url);
      return {
          url: baseUrl+url,
          options: { ...options, interceptors: true,headers:{...options.headers,Authorization} },
        };
       
  }],
  responseInterceptors: [],
};