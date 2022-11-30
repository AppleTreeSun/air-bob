import { CHANGE_COUNT } from './constants';

const initialState = {
  count: 100
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return { ...state.count, count: action.name }
    default:
      return state;
  }
}

export default reducer