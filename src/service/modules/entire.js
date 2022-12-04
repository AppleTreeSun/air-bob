import hrRequest from '../index';

// 1.获取全部的数据
export function getEntireData(params = { offset: 0, size: 20 }) {
  return hrRequest.get({
    url: '/entire/list',
    params: {
      ...params
    }
  })
}