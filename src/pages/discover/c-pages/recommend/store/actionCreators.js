import * as actionTypes from './constants';

import { getTopBanners } from '@/services/recommand';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res);
    })
  }
}