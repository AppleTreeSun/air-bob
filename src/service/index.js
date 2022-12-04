import HrRequest from './request';
import { BASE_URL, TIME_OUT } from '@/config';

export default new HrRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      // console.log('实例的请求拦截器-请求成功');
      return config
    },
    responseInterceptor(response) {
      // console.log('实例的响应拦截器-响应成功');
      return response
    }
  }
})

export * from './modules/home'
export * from './modules/entire'