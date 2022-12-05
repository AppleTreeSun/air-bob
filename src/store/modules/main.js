import { createSlice } from '@reduxjs/toolkit'


const mainSlice = createSlice({
  name: "main", 
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false
    }
  },
  reducers: {
    setHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { setHeaderConfigAction } = mainSlice.actions

export default mainSlice.reducer