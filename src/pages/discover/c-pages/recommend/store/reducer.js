
import * as actiontypes from './constants';

const defaultState = {
  topBanners: []
}

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actiontypes.CHANGE_TOP_BANNERS:
      return {...state, topBanners: []}
    default:
      return state;
  }
}

export default reducer;