import {
  CURRENT_PAGE,
  DATA_LIST,
  TOTAL_COUNT,
  IS_LOADING
} from './constants';

import { getEntireData } from '@/service';

// 普通redux的异步操作
export const fetchEntireDataAction = (page = 1) => {
  // 做分页的时候要用到这个 page

  // createAction 返回的是一个函数
  return async (dispatch) => {
    // 1.修改 currentPage
    dispatch(setCurrentPageAction(page))

    // 2.打开蒙版
    dispatch(setIsLoadingAction(true))

    // 3.请求数据
    const result = await getEntireData({ offset: (page - 1) * 20, size: 20 })

    // 4.关闭蒙版
    dispatch(setIsLoadingAction(false))

    // console.log('全部的数据：', result);

    // 5.获取到最新的数据保存到store中
    const dataList = result.list
    const totalCount = result.totalCount
    dispatch(setDataListAction(dataList))
    dispatch(setTotalCountAction(totalCount))
  }
}


export const setCurrentPageAction = currentPage => ({ type: CURRENT_PAGE, currentPage })

export const setDataListAction = dataList => ({ type: DATA_LIST, dataList })

export const setTotalCountAction = totalCount => ({ type: TOTAL_COUNT, totalCount })

export const setIsLoadingAction = isLoading => ({ type: IS_LOADING, isLoading })



