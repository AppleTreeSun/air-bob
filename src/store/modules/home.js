import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { 
  getGoodPriceData,
  getHighScoreData,
  getDiscountData,
  getHotRecommendData,
  getLongForData,
  getPlusData 
} from '@/service'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData', 
  async (payload, { dispatch }) => {

    getGoodPriceData().then(res => {
      // console.log('高性价比的数据：', res);
      dispatch(setGoodPriceAction(res))
    })

    getHighScoreData().then(res => {
      // console.log('高评分房源：', res);
      dispatch(setHighScoreAction(res))
    })

    getDiscountData().then(res => {
      // console.log('折扣房源：', res);
      dispatch(setDiscountAction(res))
    })

    getHotRecommendData().then(res => {
      // console.log('热门推荐房源：', res);
      dispatch(setHotRecommendAction(res))
    })

    getLongForData().then(res => {
      // console.log('向往城市：', res);
      dispatch(setLongForAction(res))
    })

    getPlusData().then(res => {
      // console.log('plus房源：', res);
      dispatch(setPlusAction(res))
    })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {},
    highScore: {},
    discount: {},
    hotRecommend: {},
    longFor: {},
    plus: {}
  },
  reducers: {
    setGoodPriceAction(state, { payload }) {
      state.goodPrice = payload
    },
    setHighScoreAction(state, { payload }) {
      state.highScore = payload
    },
    setDiscountAction(state, { payload }) {
      state.discount = payload
    },
    setHotRecommendAction(state, {payload}) {
      state.hotRecommend = payload
    },
    setLongForAction(state, { payload }) {
      state.longFor = payload
    },
    setPlusAction(state, {payload}) {
      state.plus = payload
    }
  }
})

export const { 
  setGoodPriceAction,
  setHighScoreAction,
  setDiscountAction,
  setHotRecommendAction,
  setLongForAction,
  setPlusAction 
} = homeSlice.actions

export default homeSlice.reducer