import {
  CURRENT_PAGE,
  DATA_LIST,
  TOTAL_COUNT,
  IS_LOADING
} from './constants';

const initialState = {
  currentPage: 1,
  dataList: [],
  totalCount: 0,
  isLoading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case DATA_LIST:
      return { ...state, dataList: action.dataList }
    case TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state;
  }
}

export default reducer