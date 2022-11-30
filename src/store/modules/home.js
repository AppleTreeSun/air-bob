import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    count: 100
  },
  reducers: {
    addCount(state, { payload }) {
      state.count = state.count + payload
    }
  }
})

export const { addCount } = homeSlice.actions

export default homeSlice.reducer