import hrRequest from '../index';

// 1.高性价比房源
export function getGoodPriceData() {
  return hrRequest.get({
    url: '/home/goodprice'
  })
}

// 2.高评分房源
export function getHighScoreData() {
  return hrRequest.get({
    url: '/home/highscore'
  })
}

// 3.折扣房源
export function getDiscountData() {
  return hrRequest.get({
    url: '/home/discount'
  })
}

// 4.热门推荐房源
export function getHotRecommendData() {
  return hrRequest.get({
    url: '/home/hotrecommenddest'
  })
}

// 5.向往城市
export function getLongForData() {
  return hrRequest.get({
    url: '/home/longfor'
  })
}

// 6.plus房源
export function getPlusData() {
  return hrRequest.get({
    url: '/home/plus'
  })
}