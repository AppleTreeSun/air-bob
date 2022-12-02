import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { 
  getGoodPriceData 
} from '@/service'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData', 
  async (payload, { dispatch }) => {
    getGoodPriceData().then(res => {
      // console.log('高性价比的数据：', res);

      dispatch(setGoodPrice(res))
    })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {}
  },
  reducers: {
    setGoodPrice(state, { payload }) {
      state.goodPrice = payload
    }
  }
})

export const { addCount, setGoodPrice } = homeSlice.actions

export default homeSlice.reducer