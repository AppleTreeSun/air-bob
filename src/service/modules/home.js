import hrRequest from '../index';

// 1.高性价比房源
export function getGoodPriceData() {
  return hrRequest.get({
    url: '/home/goodprice'
  })
}