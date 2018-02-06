// @flow

import {FETCH_DATA_SUCCESS} from './action-types';

export const fetchDataSuccess = (appLoginSuccessResult : Object) => (
  {
    type: FETCH_DATA_SUCCESS,
    payload: {isLoggedIn:true},
  }
);
