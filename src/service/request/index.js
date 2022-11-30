import axios from 'axios';

class HrRequest {

  constructor(config) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 全局的请求拦截器
    this.instance.interceptors.request.use(config => {
      console.log('全局的请求拦截器-请求成功');
      return config
    }, err => {
      console.log('全局的请求拦截器-请求失败');
      return err
    })

    this.instance.interceptors.response.use(response => {
      console.log('全局的响应拦截器-响应成功');
      return response.data
    }, err => {
      console.log('全局的响应拦截器-响应失败');
      return err
    })

    // 实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
}


export default HrRequest