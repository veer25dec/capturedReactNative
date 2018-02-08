import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from './types'

import { appLoginUser } from '../services/ApiLoginUser'
import config from '../util/config';

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
  // TODO : extract API calls out to a seperate class
  return (dispatch) => {
    console.log('email is ' ,email)
    dispatch({ type: LOGIN_USER});
    fetch(config.API_BASE_URL + config.API_APP_LOGIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'id': email,
        'auth': password,
        }),
      })
      .then(data => loginUserSuccess(dispatch,data))
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
