import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from './types'

import ApiLoginUser from '../services/ApiLoginUser'

export const emailChanged = ( text ) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatc({ type: LOGIN_USER});
    loginUser(email,password).then(data => loginUserSuccess(dispatch,data))
    .catch( (error) => loginUserFailed(dispatch,error));
  };
};

const loginUserSuccess = (dispatch, data) => {
  dispatch({
    type : LOGIN_USER_SUCCESS,
    payload: data
  });
};
const loginUserFailed = (dispatch, error) => {
  dispatch({
    type : LOGIN_USER_FAILED,
    payload: error
  });
};
